const router = require('express').Router();
const createJob = require('./create_job');
const fetchJobs = require('./fetch_jobs');
const approveJob = require('./approve_job');
// const reject_job = require('./reject_job');
const verifyToken = require('../auth/verifyToken');

router.post('/',verifyToken, createJob);
router.get('/', verifyToken, fetchJobs);
router.put('/:id',verifyToken, approveJob);
// router.delete('/:id', verifyToken,rejectJob);

module.exports = router;