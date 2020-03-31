const tasksModule = require('../../../server/modules/tasks');

module.exports = async ({ tasks }) => {
  tasksModule.set(tasks);
  return {};
};
