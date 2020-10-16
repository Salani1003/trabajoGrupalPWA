const fs = require('fs')
const publicKey = fs.readFileSync('./keys/public.pem')
const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {
    try {

        const token = req.query.token;
        console.log(token);
        const desencriptado = jwt.verify(token, publicKey);
        console.log(desencriptado.confirm, "prueba UID del token middleware")

        req.uidCorreo = desencriptado.confirm;
        console.log(req.uidCorreo, "este es el uidCorreo middleware propiedad del token ")
        req.query.uid == req.uidCorreo ? next() : res.sendStatus(401)

    } catch (e) {

        res.sendStatus(401)
    }

}


module.exports = { validateToken }