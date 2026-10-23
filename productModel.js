const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pname:{
        type:String,
        unique:true,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
}, {timestamps:true})

const productModel = mongoose.model("product",productSchema)

module.exports = productModel
