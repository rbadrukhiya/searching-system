const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var search = new Schema({
    name: ({
        type: String
    })
})

const MyModel = mongoose.model('searching', search);
module.exports = MyModel