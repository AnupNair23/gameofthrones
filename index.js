// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
// initialize our express app
const app = express();

app.use(cors({credentials: true, origin: true}))
const mongoose = require('mongoose');
// var jwt = require('jsonwebtoken');
const wars = require('./routes/wars.route');
// const record = require('./routes/record.route') // Imports routes

//body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// app.set('secretKey', 'nodeRestApi'); // jwt secret token


app.use('/', wars);
// app.use('/record', record);

//DATABASE CONNECTION

let dev_db_url = 'mongodb://anupnair:lebron23@ds241268.mlab.com:41268/battle_wars';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useUnifiedTopology: true,
  useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



let port = 8080;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});