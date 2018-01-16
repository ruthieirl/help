const router = require('express').Router();
const placesRoutes = require('./places')

// API routes
router.use('/places', placesRoutes);

module.exports = router;
