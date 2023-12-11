const bcrypt = require("bcrypt");
const uuid = require("uuid");

// Connect to Mongo
const { MongoClient } = require("mongodb");
const config = require("./dbConfig.json");
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/`;
const client = new MongoClient(url);
const db = client.db("startup");
const saveCollection = db.collection("savedResults");
const userCollection = db.collection("user");

// Test connection
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(
    `Unable to connect to database with ${url} because ${ex.message}`
  );
  process.exit(1);
});

// Add saved search
async function addSave(saveJSON) {
  const result = await saveCollection.insertOne(saveJSON);
  return result;
}

// Get saved searches
function getSaved(userName) {
  query = {};
  const options = {
    sort: { search: 1 },
  };
  const cursor = saveCollection.find(query, options);
  return cursor.toArray();
}

// Remove all searches with corresponding number
async function removeSave(searchJSON) {
  const num = searchJSON.search;
  const userName = searchJSON.email;

  const query = { email: userName, search: num };
  const result = await saveCollection.deleteMany(query);
  return result;
}

// LOGIN SERVICES
function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addSave,
  getSaved,
  removeSave,
};
