const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoute = require('./routes/auth')

const app = express();

// DB config

const db = require('./configs').mongoURI

//bodyparser middle ware
app.use(express.json());


app.use('/user', authRoute);



// connect to mongo

mongoose.connect(db,{ useNewUrlParser: true },{ useUnifiedTopology: true }).then(() => console.log("data base connected")).catch((err) => console.log(err));


app.listen(5000, () => console.log("server started.."))

