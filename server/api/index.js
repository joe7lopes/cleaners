const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const serviceAccount = require('./config/service_account.json');

const fetchUser = require('./user/fetch_user');
const fetchUserOffers = require('./user/fetch_user_offers');
const createOffer = require('./offers/create_offer');
const updateOffer = require('./offers/update_offer');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cleaners-c4bcb.firebaseio.com"
});

const app = express();

//MIDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//USERS
app.get('/users/:id', fetchUser);
app.get('/users/:id/offers', fetchUserOffers);

//OFFERS
app.post('/offers', createOffer);
app.patch('/offers/:id', updateOffer);

exports.api = functions.https.onRequest(app);