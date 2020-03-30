const users = require('../../../server/users.module');
const { errors } = require('./post.infos');

module.exports = async (newUser) => {
  if (await users.exists(newUser.username)) {
    throw new Error(errors.userExists);
  }
  await users.add(newUser);
  return {};
};
