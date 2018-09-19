const router = require('express').Router();
const createUser = require('./create_user');
const fetchUsers = require('./fetch_users');
const fetchUser = require('./fetch_user');
const fetchCurrentUser = require('./fetch_current_user');
const verifyToken = require('../auth/verifyToken');


router.get('/me',verifyToken,fetchCurrentUser);


module.exports = router;