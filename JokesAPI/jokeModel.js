const { Schema, model } = require('mongoose');

const jokeSchema = new Schema({
    setup : {
        required : true,
        minlength : 1,
        type : String
    },
    punchline : {
        required : true,
        minlength : 1,
        type : String
    },
    createdAt : {
        type : Date,
        default : new Date(),
        immutable : true
    },
    updatedAt : {
        type : Date,
        default : new Date()
    }
});

module.exports = model('joke', jokeSchema);