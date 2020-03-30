const lowdb = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

const adaper = new FileAsync('db.json');
const db = lowdb(adaper);

module.exports = db;
