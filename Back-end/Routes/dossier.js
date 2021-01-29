// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var contactController = require('../Controller/dossierController');
// Dossier routes
router.route('/Dossiers')
    .get(contactController.index)
    .post(contactController.new);

router.route('/Dossiers/:dossier_id')
    .get(contactController.view)


// Export API routes
module.exports = router;