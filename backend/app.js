const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const { route } = require('./routes/product-route');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

const productroutes = require('./routes/product-route');
app.use('/', productroutes);









app.listen(4444, err=>{
    if(err){
        console.log('Server Crash ', err);
    }
    else{
        console.log('Server Up and Running');
    }
})