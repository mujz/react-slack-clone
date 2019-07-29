const admin = require('firebase-admin');
const functions = require('firebase-functions');
const api = require('./api');

admin.initializeApp();

exports.api = functions.https.onRequest(api);
