const express = require('express');
const servicesUsers = require('../services/servicesUsers');
const router = express.Router();

router.get ('/', async (req, res)=> {
    // Llama al servicio, pasándole req y res
    await servicesUsers.getAllUsers(req, res);
    // El servicio ya se encarga de enviar la respuesta (res.json() o res.send())
});

module.exports = router;
