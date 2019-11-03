const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AnnonceSchema = new Schema({
    title: {type: String, required: true, max: 100},
    content: {type: String, required: true, max: 300},
    author: {type: String, required: true},
    date: {type: Date, required: true}
});


module.exports = mongoose.model('Annonce', AnnonceSchema);