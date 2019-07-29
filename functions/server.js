const process = require('process');
const api = require('./api');

const port = process.env.PORT || 5000;

api.listen(port, () => console.log(`App listening on port ${port}!`))
