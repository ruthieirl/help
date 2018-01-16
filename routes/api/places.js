const router = require('express').Router();
const axios = require('axios');

// Matches with "/api/places"
router.route('/:lat/:long').get(function(req, res) {
  // PUT MORE KEYWORDS/TYPES IN TO HONE IN SEARCH
  // This must be done on the backend because of CORS
  // Pick one keyword to pass in (it only handles one)... or make three thenable requests with each keyword and append them all to a single array to return 
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.lat},${
        req.params.long
      }&radius=10000&type=car_repair&key=AIzaSyCthMjho7ybR3GWBpwLH0xg0rGiyZRql3g`
    )
    .then(response => {
      console.log(response);
      res.json(response.data);
    });
});

module.exports = router;
