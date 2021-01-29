// Import dossier model
Dossier = require('../Models/dossierModel');

// Handle index actions
exports.index = function (req, res) {
    Dossier.get(function (err,dossierPatient) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "dossier retrieved successfully",
            data: dossierPatient
        });
    });
};
// Handle create dossier actions
exports.new = function (req, res) {
    var dossier = new Dossier();
    dossier.nom = req.body.nom ? req.body.nom : dossier.nom;
    dossier.prenom = req.body.prenom;
    dossier.cin = req.body.cin;
    dossier.email = req.body.email;
    dossier.phone = req.body.phone;

// save the dossier and check for errors
dossier.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New dossier created!',
                data: dossier
            });
    });
};
// Handle view dossier info
exports.view = function (req, res) {
    Dossier.findById(req.params.dossier_id, function (err, dossier) {
        if (err)
            res.send(err);
        res.json({
            message: 'Dossier details loading..',
            data: dossier
        });
    });
};
