const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');

const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');
const requestOneTimePassword = require('./request_one_time_password');
const verifyOneTimePassword = require('./verify_one_time_password');
const fetchUser = require('./fetch_user');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cleaners-c4bcb.firebaseio.com"
});

// exports.createUser = functions.https.onRequest(createUser);
// exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword);
// exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword);

//User functions
// exports.fetchUser = functions.https.onRequest(fetchUser);

const app = express();

//MIDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(404).send();
});

app.get('/users', (req, res) => {
  res.status(400).send();
});

app.get('/users/:id', fetchUser);

exports.api = functions.https.onRequest(app);