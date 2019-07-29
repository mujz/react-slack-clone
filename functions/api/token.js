const express = require('express');
const { authenticateUser } = require('../services/chatkit')

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const creds = await authenticateUser(req.query.user_id)
    res.status(200).json(creds.body);
  } catch (e) {
    res.status(400).json({ error: e.error_description })
  }
})

module.exports = router
