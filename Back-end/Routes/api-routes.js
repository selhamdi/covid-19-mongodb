let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API fichePatient Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import contact controller
var contactController = require('../Controller/contactController');
// Contact routes
router.route('/fichePatient')
    .get(contactController.index)
    .post(contactController.new);


router.route('/fichePatient/:DossierId')
    .get(contactController.view)

//update
router.route('/fichePatient/:_id')
    .put(contactController.update);


// Export API routes
module.exports = router;