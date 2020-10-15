const express = require('express');
const { validateCreate } = require('../middlewares/registro');
const router = express.Router();
const service = require('../services/users')

const create = (req, res) => {
    service
        .create(req.body)
        .then((response) => res.json(response))
        .catch((e) => res.status(500).json(e))
}

router.post('/', validateCreate, create)
module.exports = router;






