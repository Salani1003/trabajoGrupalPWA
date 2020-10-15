const Joi = require('@hapi/joi')


const schemas = {
    create: Joi.object().keys({
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        correo: Joi.string().email().required(),
        password: Joi.string().required()
    })
}

module.exports = { schemas }