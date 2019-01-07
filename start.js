const db = require ('./server/db/db');
const app = require('./server');
const port = process.env.PORT || 3000;

db.sync({force: true}) // sync db
    .then(()=>{
        console.log('db synced');
        app.listen(port); // then start listening with out express server
    });