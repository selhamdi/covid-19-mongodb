Dossier= require('../Models/dossierModel');
// Handle index actions
exports.index = function (req, res) {
   Dossier.get(function (err, Dossiers) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(Dossiers);
    });
};
// Handle create dossier actions
exports.new = function (req, res) {
    var dossier = new Dossier();
    dossier.name = req.body.name ? req.body.name: dossier.name;
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
                message: 'New dossiercreated!',
                data: dossier
            });
    });
};
// Handle view dossier info
exports.view = function (req, res) {
   Dossier.findById(req.params.dossier_id, function (err, dossier) {
        if (err)
            res.send(err);
        res.json(dossier);
    });
};
