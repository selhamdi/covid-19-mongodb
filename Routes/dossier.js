// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import dossier controller
var dossierController = require('../Controller/dossierController');

// Dossier routes
router.route('/dossierPatient')
    .get(dossierController.index)
    .post(dossierController.new);

router.route('/dossierPatient/:dossier_id')
    .get(dossierController.view)


// Export API routes
module.exports = router;