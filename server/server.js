const express = require('express');
const bodyParser = require('body-parser');

const annonce = require('./routes/annonce.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://chaegoru:iManIdiotPassword0022@lbc-hlnmk.gcp.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/annonce', annonce);

let port = 8090;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});


