const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// -------------- My apis --------------
// Save Search
// print out to make sure we are in
apiRouter.post('/saved', (req, _res, next) => {
    console.log("The url requested is '" + req.originalUrl + "' and the method is " + req.method);
    next();
});
apiRouter.post('/saved', (req, res) => {
    searches = updateSaves(req.body, searches);
    res.send(searches);
});

// Get Searches
// print out to make sure we are in
apiRouter.get('/saved', (req, _res, next) => {
    console.log("The url requested is '" + req.originalUrl + "' and the method is " + req.method);
    next();
});
// actually return searches
apiRouter.get('/saved', (_req, res) => {
    res.send(searches);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let searches = [];
function updateSaves(newSearch, searches) {
    let found = false;
    for (const [i, prevSeach] of searches.entries()) {
        if (newSearch.search === prevSeach.search) {
            found = true;
            break;
        }
    }

    if(!found){
        searches.push(newSearch);
    }

    return searches;
}
  