// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API2 Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import fichePatient controller
var fichePatientController = require('../Controller/fichePatientController');

// fichePatient routes
router.route('/fichePatient')
    .get(fichePatientController.index)
    .post(fichePatientController.new);

router.route('/fichePatient/:fichePatient_id')
    .get(fichePatientController.view)


// Export API routes
module.exports = router;