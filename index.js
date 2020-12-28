const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

const authRoute = require('./routes/user')
const mailSendRoute = require('./routes/mails')

const app = express();


// DB config

const db = require('./configs').mongoURI


app.use(cors())
//bodyparser middle ware
app.use(express.json());


app.use('/users', authRoute);
app.use('/mail', mailSendRoute);



// connect to mongo

mongoose.connect(db,{ useNewUrlParser: true },{ useUnifiedTopology: true }).then(() => console.log("data base connected")).catch((err) => console.log(err));


app.listen(5000, () => console.log("server started.."))

