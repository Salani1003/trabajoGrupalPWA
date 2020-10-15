const fs = require('fs')
const publicKey = fs.readFileSync('./keys/public.pem')
const jwt = require('jsonwebtoken')

const validateToken = (req, res) => {
    try {

        const { authorization } = req.query;
        console.log(authorization)
        const { uid } = jwt.verify(authorization, publicKey);

        req.uidCorreo = uid;

    } catch (e) {

        res.sendStatus(401)
    }

}


module.exports = { validateToken }