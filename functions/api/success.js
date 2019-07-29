const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { code, state, url } = req.query
  res.redirect(302, `${url}?code=${code}&state=${state}`)
})

module.exports = router
