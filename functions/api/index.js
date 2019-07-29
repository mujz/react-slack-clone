const express = require('express');
const cors = require('cors');
const authAPI = require('./auth');
const tokenAPI = require('./token');
const successAPI = require('./success');

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use('/ping', (req, res) => res.status(200).send("I'm alive!"));
app.use('/auth', authAPI);
app.use('/token', tokenAPI);
app.use('/success', successAPI);

app.use("*", (req, res) => {
	res.status(404).send("This route does not exist.");
});

module.exports = app;
