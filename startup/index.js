// Require Express
const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

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
apiRouter.get('/saved', (_req, _res, next) => {
    console.log("Requested to find");
    next();
});
// actually return searches
apiRouter.get('/saved', async (_req, res) => {
    const searches = await DB.getSaved();
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

// -----------------------------------------------------------------

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  