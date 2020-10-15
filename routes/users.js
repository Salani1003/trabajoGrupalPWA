var express = require('express');
var router = express.Router();
const service = require('./../models/users')
const { validateToken } = require('./../middlewares/users')




const confirm = async (req, res) => {
  try {
    console.log(req)
    const habilitar = await service
      .update({ obj: { habilitado: true }, uidCorreo: req.query.uid })
  } catch (e) {
    console.log(e);
    res.status(500).json(e);

  }
}


router.get('/confirm', validateToken, confirm)
module.exports = router;



