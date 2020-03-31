const db = require('../db');

module.exports = {
  exists(predicate) {
    const found = db.get('users').find(predicate).value();
    return !!found;
  },
  add(user) {
    db.get('users').push(user).write();
  },
};
