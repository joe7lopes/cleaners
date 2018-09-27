const router = require('express').Router();
const createJob = require('./create_job');
const verifyToken = require('../auth/verifyToken');

router.post('/',verifyToken, createJob);

module.exports = router;