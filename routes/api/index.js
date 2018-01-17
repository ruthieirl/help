const router = require('express').Router();
const placesRoutes = require('./places')
const detailsRoutes = require('./details')

// API routes
router.use('/places', placesRoutes);
router.use('/details', detailsRoutes);

module.exports = router;
