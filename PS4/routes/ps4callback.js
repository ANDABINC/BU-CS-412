const express = require('express')
const router = express.Router()
const config = require('./config')

const request = require('request')

const options = {
    'method': 'POST',
    'url': config.burl + 'London,UK?key='+ config.bkey,
    'json': {
        'key': config.bkey,
        'include': 'current'
    }
}

const cbAPI = function (callback) {
    request(options, function(error,response) {
        return callback(error,response)
    })
}


router.post('/', function(req,res,next) {
    const result = cbAPI(function(error, result){
        if (error) throw new Error(error);
        res.send(result.body);
    })
})

module.exports = router