const bd = require("./../utils/bd")


const update = (obj, Correo) =>
    bd('usuarios')
        .where({ uidCorreo: Correo })
        .update(obj)

module.exports = { update }


