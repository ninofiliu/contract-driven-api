const db = require('../db');

module.exports = {
  get() {
    return db.get('tasks').value();
  },
  set(tasks) {
    db.set('tasks', tasks).write();
  },
};
