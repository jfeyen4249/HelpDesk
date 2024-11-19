const fn = require('../tools/publicFunctions.js');

const whitelist = [
    {
        ip: '204.144.214.238',
        name: 'Blackhawk School District',
        key: '123abc',
    },

    {
        ip: '10.1.40.38',
        name: 'Monroe School District',
        key: 'abc123',
    },
    {
        ip: '127.0.0.1',
        name: 'Local Developer',
        key: '123',
    }
]

// Middleware to check the IP address
function checkIP(req, res, next) {
    // Get the real client IP address from the X-Forwarded-For header or remoteAddress
    const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress.split(':').slice(-1)[0];

    for (let i = 0; i < whitelist.length; i++) {
        console.log(whitelist[i]);
        if (whitelist[i].ip == clientIP && whitelist[i].key == req.query.key) {
            req.name = whitelist[i].name;
            req.ip = clientIP;
            next();
            return;
        } else {
            if (whitelist.length - 1 == i) {
                fn.logging(`Unauthorized request from ${clientIP}`);
                res.status(401).send(`You are not Unauthorized. Your IP address is ${clientIP}.` );
            }
        }
    }
}




module.exports = { checkIP };