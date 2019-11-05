const express = require('express');
const body_parser = require('body-parser');
const route = require('./routing/route');
const cookie = require('cookie-parser');
const port = 3000;
const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({
   extended: false,
}));

app.use(route);

// Start the server
const server = app.listen(port, function () {
   var host = server.address().address;   
   console.log("Example app listening at http://%s:%s", host, port)
})

