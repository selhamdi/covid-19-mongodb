var mongoose = require('mongoose');
// Setup schema
var dossierSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cin: {
        type: String,
        required: true
    },
   
 
    phone: String,

});
// Export Dossier model
var Dossier = module.exports = mongoose.model('dossier', dossierSchema);
module.exports.get = function (callback, limit) {
    Dossier.find(callback).limit(limit);
}