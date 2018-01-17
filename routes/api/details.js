const router = require('express').Router();
const axios = require('axios');

router.route('/details/:placeid').get(function (req, res) {
    axios
        .get(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.match.params.placeid}&key=AIzaSyCthMjho7ybR3GWBpwLH0xg0rGiyZRql3g`
        )
        .then(response => {
            console.log(response);
            res.json(response.data);
        });
});

module.exports = router;