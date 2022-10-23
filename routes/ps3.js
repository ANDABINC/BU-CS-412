const express = require('express');
const router = express.Router();



router.get('/1b',(req, res, next) => {
    res.render('ps3p1b', {str:`Hey now`})
})

router.post('/1c', (req, res, next)=>{
    let str = req.body.str
    let len = str.length
    res.render('ps3p1c',{str: `${str}`, len: `${len}`})
})

router.get('/name/:strname', (req, res, next)=>{
    let str= req.params.strname
    let len = str.length
    res.render('ps3p1c', {str: `${str}`, len: `${len}`})
})

module.exports= router;