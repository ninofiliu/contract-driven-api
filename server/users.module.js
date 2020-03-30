const db = require('./db');

module.exports = {
  exists(username) {
    const found = db.get('users').find((user) => user.username === username).value();
    return !!found;
  },
  add(user) {
    db.get('users').push(user).write();
  },
};
