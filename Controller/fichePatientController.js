
// Import FichePatient model
FichePatient = require('../Models/fichePatientModel');

// Handle index actions
exports.index = function (req, res) {
    FichePatient.get(function (err,fichePatient) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "fichePatient retrieved successfully",
            data: fichePatient
        });
    });
};
// Handle create fichePatient actions
exports.new = function (req, res) {
    var fichePatient = new FichePatient();
    fichePatient.idPatient = req.body.idPatient;
    // fichePatient.dateTest = req.body.dateTest;
    fichePatient.resultatTest = req.body.resultatTest;


// save the fichePatient and check for errors
fichePatient.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New fichePatient created!',
                data: fichePatient
            });
    });
};
// Handle view fichePatient info
exports.view = function (req, res) {
    FichePatient.findById(req.params.fichePatient_id, function (err, fichePatient) {
        if (err)
            res.send(err);
        res.json({
            message: 'fichePatient details loading..',
            data: fichePatient
        });
    });
};
