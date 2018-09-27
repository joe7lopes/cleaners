const router = require('express').Router();
const searchCleaners = require('./search_cleaners');

router.get('/cleaners',searchCleaners);


module.exports = router;