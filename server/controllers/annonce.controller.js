const Annonce = require('../models/annonce.model');

//Create
exports.annonce_create = function (req, res) {
    let annonce = new Annonce(
        {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            date: new Date()
        }
    );

    annonce.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Annonce Created successfully')
    })
};

//Read
exports.annonce_details = function (req, res) {
    Annonce.findById(req.params.id, function (err, annonce) {
        if (err) return next(err);
        res.send(annonce);
    })
};

//Update
exports.annonce_update = function (req, res) {
    Annonce.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, annonce) {
        if (err) return next(err);
        res.send('Annonce udpated.');
    });
};

//Delete
exports.annonce_delete = function (req, res) {
    Annonce.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};