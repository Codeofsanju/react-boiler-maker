const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');


//logging middleware
app.use(morgan('dev'));

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//Mount for all API routes!
app.use('/api', require('./api')); 


//Send index file for any request that do not match one of our API routes (Single Page App)
app.get('*', function (req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//500 error handling
app.use(function(err, req, res, next){
    console.err(err);
    console.err(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// listen for requests
const port = process.env.PORT || 3000; // Heroku friendly 
app.listen(port, function(){
    console.log(`Your server is listening on port ${port}`);
});

module.exports = app;