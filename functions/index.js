const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const authAPI = require('./api/auth');
const tokenAPI = require('./api/token');
const successAPI = require('./api/success');

admin.initializeApp();

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

exports.api = functions.https.onRequest(app);
