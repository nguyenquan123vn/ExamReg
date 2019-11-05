const pool = require('../model/db');
const express = require('express');
const router = express.Router();

router.get('/users/:id', (request, response) => {
    /*const id = request.params.id;
    pool.query('SELECT * FROM `account_list` WHERE `id` = ?', id, (error, result) => {
        if (error) throw error;
        
        response.send(result);
    }); */
});

router.get('/a', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API'}
    );
});

router.get('/user', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})

router.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

router.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });
module.exports = router;
