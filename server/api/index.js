const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const serviceAccount = require('./config/service_account.json');
const AuthController = require('./auth/auth_controller');
const UserController = require('./user/user_controller');
const SearchController = require('./search/search_controller');
const JobsController = require('./job/job_controller');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cleaners-test.firebaseio.com"
});

const app = express();

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//AUTH
app.use('/auth', AuthController);

//USERS
app.use('/users', UserController);

//SEARCH
app.use('/search',SearchController);

//JOBS
app.use('/jobs', JobsController);

exports.api = functions.https.onRequest(app);