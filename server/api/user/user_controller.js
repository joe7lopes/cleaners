const router = require('express').Router();
const createUser = require('./create_user');
const fetchUsers = require('./fetch_users');
const fetchUser = require('./fetch_user');
const updateUser = require('./update_user');
const fetchProfile = require('./fetch_profile');
const verifyToken = require('../auth/verifyToken');

router.get('/',fetchUsers);
router.get('/user-profile',verifyToken,fetchProfile)
router.get('/:id',fetchUser);

router.post('/',verifyToken,createUser);

router.patch('/:id', verifyToken,updateUser);

module.exports = router;