const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const cookie = require('cookie-parser');
const session = require('express-session');
const mysqlStore = require('express-mysql-session')(session);

const user_route = require('./routing/user_route');
const db = require('./model/db');

const app = express();
const port = process.env.PORT || 3001;

//var sessionStore = new mysqlStore({},db);

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));
app.use(cookie('this is a secret, huehue!!!'));
app.use(session({
   key: 'session_cookie_name',
   secret: 'this is a secret, huehue!!!',
   saveUninitialized : true,
   resave: true,
   cookie: { 
      maxAge:43200,
      secure: false
   },
   //store: sessionStore
}));

app.use('/user',user_route);

// Start the server
const server = app.listen(port, function () {
   var host = server.address().address;   
   console.log(`Listening on port ${port}`)
})

