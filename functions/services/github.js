const fetch = require('node-fetch')

exports.accessTokenFromCode = code =>
  fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: 'ad6530fea3880fcc55ed',
      client_secret: '2579de1f4441d1f5d99ce795b6bbc724f9a8202e',
      code,
    }),
  })
    .then(res => res.json())
    .then(data => data.access_token)

exports.userFromAccessToken = token =>
  fetch(`https://api.github.com/user?access_token=${token}`)
    .then(res => res.json())
