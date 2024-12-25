const jwt = require('jsonwebtoken')
const crypto = require('crypto') //crypto.randomBytes(32).toString('hex')
const secrete_key = process.env.JWT_SECRET

function commonHeaders(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

function validateAuthorization(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]
    if(!token) return res.sendStatus(401)
    else{
        jwt.verify(token, secrete_key, (err, user) => {
            if(err)
                res.sendStatus(403)
        })
    }
    next()
}

module.exports={
    commonHeaders,
    validateAuthorization
}   