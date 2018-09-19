const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const serviceAccount = require('./config/service_account.json');
const AuthController = require('./auth/auth_controller');
const UserController = require('./user/user_controller');

// const createOffer = require('./offers/create_offer');
// const updateOffer = require('./offers/update_offer');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cleaners-test.firebaseio.com"
});

const app = express();

//MIDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//AUTH
app.use('/auth',AuthController);

//USERS
app.use('/users',UserController);


//OFFERS
// app.post('/offers', createOffer);
// app.patch('/offers/:id', updateOffer);

exports.api = functions.https.onRequest(app);