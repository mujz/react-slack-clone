const express = require('express');
const shortid = require('shortid');
const { authenticateOrCreateUser } = require('../services/chatkit')
const github = require('../services/github');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { code } = JSON.parse(req.body)
    const token = await github.accessTokenFromCode(code)
    const { login: id, name, avatar_url: avatarURL } = await github.userFromAccessToken(token)

    await authenticateOrCreateUser(id, name, avatarURL);

    res.status(200).json({ id, token });
  } catch (e) {
    console.error(e)
    res.status(400).json({ error: e.error_description })
  }
})

module.exports = router
