const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express_jwt = require('express-jwt');

const User = require('../model/userModel');

const user_router = express.Router();
//user_router.use(cors());
//init express-jwt
const jwt_ex = express_jwt({
    secret: process.env.SECRET_KEY
})

user_router.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
 });
 
user_router.post('/register', (request, response) => {
    let today = new Date();
    let userData = {
        id: request.body.id,
        username: request.body.username,
        password: request.body.password,
        isAdmin: 1,
        created: today
    }
    User.findOne({
        where: {
            username: request.body.username
        }
    }).then(user => {
        if(!user) {
            bcrypt.hash(request.body.password, 10, (err, hash) => {
                userData.password = hash;
                User.create(userData).then(user => {
                    response.json({status: 'Registered'})
                })
                .catch(err =>{
                    response.send('error:' + err);
                })
            })
        }
        else 
        {
            response.json({error: 'User existed'})
        }
    })
});  

//login function
user_router.post('/login', (request, response) => {
    User.findOne({
        attributes: {exclude: ['created']},
        where: {
            username: request.body.username
        }
    }).then( (user) => {
        if(user) {
            //compare hashed password with user input password
            if(bcrypt.compareSync(request.body.password, user.password)){
                //jwt implementation
                let token = jwt.sign({id: user.id, username: user.username, role: user.isAdmin}, process.env.SECRET_KEY, {
                   algorithm : 'HS384',
                   expiresIn : 1440
                }) 
                response.json({
                    isAdmin: user.isAdmin,
                    sucess: true,
                    err: null,
                    token
                }); 
               //console.log(user.id + " " + user.isAdmin);    
            } else {
                console.log('Wrong password');
                response.status(400).json({
                    isAdmin: null,
                    sucess: false,
                    token: null,
                    err: 'Password is incorrect'
                });
            }
        } else {
            console.log('Invalid User');
            response.status(400).json({
                isAdmin: null,
                sucess: false,
                token: null,
                err: 'Username is invalid'
            });
        }
    }).catch(err => {
        console.log(err);
        response.status(400).json({error: err});
    })
}); 

user_router.get('/', jwt_ex, (request, response) => {
    response.send('You are authenticated'); //Sending some response when authenticated
});

/*router.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 }); */
module.exports = user_router;
