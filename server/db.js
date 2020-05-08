const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(`${__dirname}/db.json`);
const db = lowdb(adapter);
db.defaults({ users: [], tasks: [] }).write();

module.exports = db;
