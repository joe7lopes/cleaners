const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const serviceAccount = require('./config/service_account.json');

const createUser = require('./user/create_user');
const fetchUsers = require('./user/fetch_users');
const fetchUser = require('./user/fetch_user');
const updateUser = require('./user/update_user');

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
app.post('/users', createUser);
app.get('/users', fetchUsers);
app.get('/users/:id', fetchUser);
app.patch('/users/:id',updateUser);
app.get('/users/:id/offers', fetchUserOffers);

//OFFERS
app.post('/offers', createOffer);
app.patch('/offers/:id', updateOffer);

exports.api = functions.https.onRequest(app);