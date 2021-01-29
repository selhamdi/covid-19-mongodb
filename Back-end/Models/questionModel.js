var mongoose = require('mongoose');

// Setup schema
var questionSchema = mongoose.Schema({
        fievre: {
          type: String,
          required: true,
        },
        toux_seche: {
            type: String,
            required: true,
          },
        difficultes_a_respirer: {
            type: String,
            required: true,
          },
          maux_de_gorge: {
            type: String,
            required: true,
          },
          rhinite: {
            type: String,
            required: true,
          },
          douleur_dans_les_muscles: {
            type: String,
            required: true,
          },
          fatigue: {
            type: String,
            required: true,
          },
          maux_de_tete: {
            type: String,
            required: true,
          },
          diarrhees: {
            type: String,
            required: true,
          },
          nausees_vomissement: {
            type: String,
            required: true,
          },
          anosmie: {
            type: String,
            required: true,
          },
          agueusie: {
            type: String,
            required: true,
          },
          DossierId: {
            type: String,
            required: true,
            ref:'dossier'
        }
});

var Question = module.exports = mongoose.model("Question", questionSchema);
module.exports.get = function (callback, limit) {
 Question.find(callback).limit(limit);
}

// const Question = mongoose.model("Question", questionSchema);
// module.exports = Question;
