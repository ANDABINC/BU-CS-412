"use strict";

const express = require('express')
const router = express.Router()
const config = require('./config')

const request = require('request')
// const async = require('async')

// const weatherURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
// const key = '?key=APN99RZ4RKGUW2UCLLCTYTJZW'


const options = {
    'method': 'POST',
    'url': config.burl + 'London,UK?key=' + config.bkey,
    'json': {
        'key': config.bkey,
        'include': 'current'
    }
}

router.post('/', function(req,res,next){
    return new Promise((resolve, reject) => {
        request(options, function(error, response,body) {
            if (error) throw new Error(error);
            // console.log(JSON.parse(response.body));
            resolve(body);
        });
    })
        .then(
            body => {
                res.send(body)
            }
        )
})




module.exports = router
