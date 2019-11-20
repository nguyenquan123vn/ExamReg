const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const cookie = require('cookie-parser');
const route = require('./routing/route');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({
   extended: true,
}));
app.use(express.static(__dirname + '/view'));
app.use(route);

// Start the server
const server = app.listen(port, function () {
   var host = server.address().address;   
   console.log(`Listening on port ${port}`)
})

