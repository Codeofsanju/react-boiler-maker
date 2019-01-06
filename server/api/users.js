const router = require('express').Router();

//INDIVIDUAL ROUTERS FOR USERS


//GET request for /api/users
router.get('/', async function (req, res, next){
    //SOMETHING
});

//POST request for /api/users
router.post('/', async function (req,res,next){

});

//PUT request for /api/users/:id
router.put('/:id', async function (req, res, next){

});

// DELETE request for /api/users/:id
router.delete('./:id', async function (req, res, next){

});

module.exports = router;