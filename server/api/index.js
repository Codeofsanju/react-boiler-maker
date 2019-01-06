const router = require('express').router();


//ADD ALL API ROUTES HERE
router.use('/users', require('./users')); // EXAMPLE: matches all requests to /api/users



//error handling for routes do not exist
router.use(function (req, res, next){
    const err = new Error('not found');
    err.status = 404;
    next(err);
});
module.exports = router;