const fetch = require('node-fetch');
const Chatkit = require('@pusher/chatkit-server');
const { chatkitCredentials } = require('../constants');

const chatkit = new Chatkit.default(chatkitCredentials);

const authenticateUser = async (userId) => chatkit.authenticate({ userId });

const createUser = (id, name, avatarURL) => chatkit.createUser({ id, name, avatarURL });

const authenticateOrCreateUser = (id, name, avatarURL) => chatkit.getUser({ id })
  .then(() => authenticateUser(id))
  .catch(() => createUser(id, name, avatarURL))


module.exports = {
  createUser,
  authenticateUser,
  authenticateOrCreateUser,
}
