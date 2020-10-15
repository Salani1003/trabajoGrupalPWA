const bd = require('../utils/bd')
const { v4: uuid } = require('uuid')
const { send } = require('./../services/mail')
const fs = require("fs"); //file system
const jwt = require("jsonwebtoken");
const sha1 = require("sha1");
const privateKey = fs.readFileSync("./keys/private.pem");


const signOptions = { algorithm: "RS256", expiresIn: "2h" };

const createToken = (payload) => jwt.sign(payload, privateKey, signOptions);



const create = async (obj) => {


    try {
        const confirm = uuid();
        const token = createToken({ confirm });
        const { nombre, apellido, correo, password } = obj

        const usuario = { nombre, apellido, correo, password: sha1(password), uidCorreo: confirm }

        const [idUsuario] = await bd('usuarios').insert(usuario);

        const html = `<a href= ${process.env.URL_CONFIRM}?token=${token}&uid=${confirm}> Hace Click para confirmar tu cuenta </a>`
        const messageId = await send({
            to: correo,
            subject: "Gracias por registrarte",
            html: html,
        })
        return idUsuario
    } catch (e) {
        console.log(e)
    }


}

module.exports = { create };

