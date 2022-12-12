const express = require('express')
const router = express.Router()
const config = require('./config')

const fetch = require('node-fetch');

const options = {
    'method': 'POST',
    'url': config.burl + 'London,UK?key=' + config.bkey,
    'json': {
        'key': config.bkey,
        'include': 'current'
    }
}



router.post('/', async function (req, res, next) {
    let returnValueRaw = await fetch (config.burl + 'London,UK?key=' + config.bkey,);
    let returnValue = await returnValueRaw.json();
    res.send(returnValue);

})

module.exports = router