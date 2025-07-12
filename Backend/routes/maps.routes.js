const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapControllers = require('../controllers/map.controller');
const { query } = require('express-validator');

router.get('/get-coordinates', 
    query('address').isString().isLength({min: 3}),
    authMiddleware.authUser, mapControllers.getCoordinates
);

router.get('/get-distance-time',
    query('origin').isString().isLength({min: 3}),
    query('destination').isString().isLength({min: 3}),
    authMiddleware.authUser, mapControllers.getDistanceTime
);

router.get('/get-suggestions',
    query('input').isString().isLength({min: 3}),
    authMiddleware.authUser, mapControllers.getAutoCompleteSuggestions
);

module.exports = router;