const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  
  app.set('db', dbInstance)
}).catch( err => console.log(err) );

app.get('/api/inventory', controller.getInventory)

const port = process.env.PORT || 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );