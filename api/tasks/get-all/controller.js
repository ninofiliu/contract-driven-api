const tasks = require('../../../server/modules/tasks');

module.exports = async () => ({ tasks: tasks.get() });
