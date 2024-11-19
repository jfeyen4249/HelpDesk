const express = require("express");
const middleware = require('../tools/middleware.js')
const fn = require('../tools/publicFunctions.js');
const router = express.Router();


router.get('/', middleware.checkIP, (req, res) => {
    fn.logging(`Request from ${req.ip} for ${req.name}`);
    res.send(`Welcome ${req.name}. Your IP address is ${req.ip}.` );
});

module.exports = router;