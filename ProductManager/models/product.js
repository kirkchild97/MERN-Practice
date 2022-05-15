const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    title : {
        type : String,
        required : true,
        minlength : 1
    },
    price : {
        type : Number,
        required : true,
        min : 0
    },
    description : {
        type : String,
        required : true,
        minlength : 5
    },
    createdAt : {
        type : Date,
        required : true,
        default : new Date,
        immutable : true
    },
    updatedAt :{
        type : Date,
        required : true,
        default : new Date
    }
})

module.exports = model('product', productSchema);