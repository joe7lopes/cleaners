const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const serviceAccount = require('./service_account.json');

const fetchUser = require('./fetch_user');

const createOffer = require('./create_offer');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cleaners-c4bcb.firebaseio.com"
});

const app = express();

//MIDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(404).send();
});

//USERS
app.get('/users', (req, res) => {
  res.status(400).send();
});

app.get('/users/:id', fetchUser);
// app.patch('/users/:id', updateUser);

//OFFERS

app.post('/offers', createOffer);

exports.api = functions.https.onRequest(app);