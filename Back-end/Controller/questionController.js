 Question = require('../Models/questionModel');

// Handle index actions
exports.index = function (req, res) {
   Question.get(function (err, Question) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(Question);
    });
};




exports.new = function (req, res) {

    var question = new Question();
    question.fievre = req.body.q1;
    question.toux_seche = req.body.q2;
    question.difficultes_a_respirer = req.body.q3;
    question.maux_de_gorge = req.body.q4;
    question.rhinite = req.body.q5;
    question.douleur_dans_les_muscles = req.body.q6;
    question.fatigue = req.body.q7;
    question.maux_de_tete = req.body.q8;
    question.diarrhees = req.body.q9;
    question.nausees_vomissement = req.body.q10;
    question.anosmie = req.body.q11;
    question.agueusie = req.body.q12;
    question.DossierId = req.body.DossierId;
    
// save the dossier and check for errors
question.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New question created!',
                data: question
            });
    });
};
