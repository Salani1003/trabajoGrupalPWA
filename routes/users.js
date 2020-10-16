var express = require('express');
var router = express.Router();
const service = require('./../models/users')
const { validateToken } = require('./../middlewares/users')



const confirm = (req, res) =>
  service
    .update({ habilitado: true }, req.query.uid)
    .then((response) => res.json(`Tu cuenta fue habilitada correctamente. Fran te queremos!`))
    .catch((e) => res.status(500).json(e))



router.get('/confirm', validateToken, confirm)
module.exports = router;



