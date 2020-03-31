const db = require('../db');

module.exports = {
  exists(partialUser) {
    const found = db
      .get('users')
      .find((user) => {
        if (partialUser.username && partialUser.username !== user.username) return false;
        if (partialUser.password && partialUser.password !== user.password) return false;
        return true;
      })
      .value();
    return !!found;
  },
  add(user) {
    db.get('users').push(user).write();
  },
};
