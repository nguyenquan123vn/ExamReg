import decode from 'jwt-decode';
import axios from 'axios';

export default class Authentication {
    constructor(domain){
        this.domain = 'http://localhost:3001';
        this.fetch = this.fetch.bind(this);
        this.login = this.login.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    login(user){
        return this.fetch(`${this.domain}/user/login`, {
            method: 'POST',
            body: JSON.stringify(user)
        }).then(res => {
            this.setToken(res.token) // Setting the token in localStorage
            return Promise.resolve(res);
        }) 
    }

    isLoggedIn(){
        //check token is valid
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token) 
    }

    isTokenExpired(token){
        try{
            const decoded = decode(token);
            if(decoded.exp < Date.now() / 1000) {
                return true;
            }
            else
            {
                return false;
            }
        }
        catch (err){
            return false;
        }
    }

    setToken(token){
        localStorage.setItem('user_token', token);
    }

    getToken(){
        localStorage.getItem('user_token');
    }

    logout(){
        localStorage.removeItem('user_token');
    }

    getProfile(){
        return decode(this.token);
    }

    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.isLoggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken();
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this.checkStatus)
            .then(response => response.json())
    }

    checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

}