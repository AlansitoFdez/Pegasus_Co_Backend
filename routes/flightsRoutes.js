const express = require('express')
const router = express.Router()
const flightsController = require('../controllers/flightsControllers.js')

router.get('/', flightsController.getAllFlights)
router.get('/origin/:origin', flightsController.getFlightByOrigin)
router.post('/', flightsController.createFlight)
router.put('/:id', flightsController.updateFlight)
router.delete('/:id', flightsController.deleteFlight)

module.exports = router