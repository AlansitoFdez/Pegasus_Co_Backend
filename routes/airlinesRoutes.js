const express = require('express');
const router = express.Router();
const airlinesController = require('../controllers/airlinesControllers.js');

router.get('/', airlinesController.getAllAirlines);
router.get('/:name', airlinesController.getAirlineByName);
router.post('/', airlinesController.createAirline);
router.put('/:id', airlinesController.updateAirline);
router.delete('/:id', airlinesController.deleteAirline);

module.exports = router;