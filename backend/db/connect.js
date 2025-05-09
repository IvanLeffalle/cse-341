const dotenv = require("dotenv");
dotenv.config();
const Mongoclient = require("mongodb").MongoClient;

const uri = process.env.DB_CONNECTION_STRING;
let _db;

const initDb = (callback) => {
  if (_db) {
    console.log("Database is already initialized!");
    return callback(null, _db);
  }
  Mongoclient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error("Database not initialized!");
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
