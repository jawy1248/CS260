// Require Mango
const { MongoClient } = require('mongodb');
const config = require("./dbConfig.json")
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/`;
const client = new MongoClient(url);
const db = client.db("startup");
const collection = db.collection("savedResults");

// Test connection
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

// Add saved search
async function addSave(saveJSON){
    const result = await collection.insertOne(saveJSON);
    return result;
}

// Get saved searches
function getSaved(){
    const query = {};
    const options = {
      sort: { search: 1 }
    };
    const cursor = collection.find(query, options);
    return cursor.toArray();
}

// Remove all searches with corresponding number
async function removeSave(searchJSON){
    const num = searchJSON.search;
    const query = {search: num};
    const result = await collection.deleteMany(query);
    return result;
}

module.exports = { addSave, getSaved, removeSave }