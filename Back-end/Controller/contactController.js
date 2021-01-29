
Contact = require('../Models/contactModel');
// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(contacts);
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var contact = new Contact();
    contact.DossierId = req.body.DossierId;
    // contact.resultatTest = req.body.resultatTest;

    // save the contact and check for errors
    contact.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json(contact);
    });
};



exports.update = function (req, res) {
    var contact = new Contact();
    // contact._id=req.params._id;
    // contact.resultatTest = 'hhhh';
    // contact.save(function (err) {
    //     // Check for validation error
    //     if (err)
    //         res.json(err);
    //     else
    //         res.json(contact);
    // });
    // contact.updateOne(function (err) {
    //     // Check for validation error
    //     if (err)
    //         res.json(err);
    //     else
    //         res.json(contact);
    // });
    // contact.updateOne({_id: contact._id },{$set:{ resultatTest: 'aaa' }}, function (err) {
    //     if (err)
    //         res.json(err);
    //     else
    //         res.json(contact);
    // })
    // contact.updateOne({ _id: contact._id }, { resultatTest: contact.resultatTest }
    // )
   Contact.findByIdAndUpdate({ _id: req.params._id}, { resultatTest: 'updated' }, { upsert: true });
};


// Handle view contact info
exports.view = function (req, res) {
    Contact.findOne({ DossierId: req.params.DossierId }, function (err, contact) {
        if (err)
            res.send(err);
        res.json(contact);

    });

};

