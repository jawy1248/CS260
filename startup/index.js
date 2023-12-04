// Setup required items
const bcrypt = require('bcrypt');

const express = require('express');
const app = express();

const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const cookieParser = require('cookie-parser');
const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// ---------------------------- My apis ----------------------------

// -------------- Save Search --------------
// print out to make sure we are in
apiRouter.post('/saved', (_req, _res, next) => {
    console.log("Requested to save");
    next();
});
// actually save search
apiRouter.post('/saved', async (req, res) => {
    searches = await DB.addSave(req.body);
    res.send(searches);
});

// -------------- Get Searches --------------
// print out to make sure we are in
apiRouter.get('/saved', (req, _res, next) => {
    console.log("Requested to find");
    next();
});
// actually return searches
apiRouter.get('/saved', async (req, res) => {
    const searches = await DB.getSaved(req.body.email);
    res.send(searches);
});

// -------------- Delete Saved Search --------------
// print out to make sure we are in
apiRouter.delete('/saved', (_req, _res, next) => {
    console.log("Requested to delete");
    next();
});
// actually delete search
apiRouter.delete('/saved', async (req, res) => {
    const searches = await DB.removeSave(req.body);
    res.send(searches);
});

// -------------- CreateAuth token for a new user --------------
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
        console.log("Unable to create");
    } else {
        const user = await DB.createUser(req.body.email, req.body.password);

        // Set the cookie
        setAuthCookie(res, user.token);

        res.send({
            id: user._id,
        });
        console.log("Successfully created an account");
    }
});

// -------------- GetAuth token for the provided credentials --------------
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        console.log("Successfully logged in");
        return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
    console.log("Unable to login");
});

// -------------- DeleteAuth token if stored in cookie --------------
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// -------------- GetUser returns information about a user --------------
apiRouter.get('/user/:email', async (req, res) => {
    const user = await DB.getUser(req.params.email);
    if (user) {
        const token = req?.cookies.token;
        res.send({ email: user.email, authenticated: token === user.token });
        return;
    }
    res.status(404).send({ msg: 'Unknown' });
});

// -------------- secureApiRouter verifies credentials for endpoints --------------
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
authToken = req.cookies[authCookieName];
const user = await DB.getUserByToken(authToken);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
});

// -----------------------------------------------------------------

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
  
const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  
peerProxy(httpService);