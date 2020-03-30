const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adaper = new FileSync(`${__dirname}/db.json`);
const db = lowdb(adaper);
db.defaults({ users: [] }).write();

module.exports = db;
