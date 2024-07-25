var mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/domino';
// setup mongo connection
// require('dotenv').config();
// const mongoURL = process.env.DB_URL;
// {

//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

mongoose.connect(mongoURL);

// for  default connections
const db = mongoose.connection;


// jab connection ho rha use koi sur bhi rha hoga
// add event  listener baithha saktte hai 
db.addListener('connected', () => {
    console.log("connection is compeleted");

});
db.addListener('error', () => {
    console.log("connection is lost");

});
db.addListener('disconnected', () => {
    console.log("disconnection");

});

// module.exports = {
//     db
// }
module.exports = db;