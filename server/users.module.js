const db = require('./db');

module.exports = {
  exists(partialUser) {
    const found = db.get('users')
      .find((user) => !partialUser.username || partialUser.username === user.username)
      .find((user) => !partialUser.password || partialUser.password === user.password)
      .value();
    return !!found;
  },
  add(user) {
    db.get('users').push(user).write();
  },
};
