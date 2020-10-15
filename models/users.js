const bd = require("./../utils/bd")


const update = (obj, uidCorreo) =>
    bd('usuarios')
        .where(uidCorreo)
        .update(obj)

module.exports = { update }