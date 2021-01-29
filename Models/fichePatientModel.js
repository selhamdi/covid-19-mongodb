var mongoose = require('mongoose');
// Setup schema
var fichePatientSchema = mongoose.Schema({
    idPatient: {
        type: String,
        required: true
    },
    dateTest: {
        type: Date,
        default: Date.now
    },
    resultatTest: {
        type: String,
        required: true
    }
});
// Export fichierPatient model
var FichePatient = module.exports = mongoose.model('fichePatient', fichePatientSchema);
module.exports.get = function (callback, limit) {
   FichePatient.find(callback).limit(limit);
}