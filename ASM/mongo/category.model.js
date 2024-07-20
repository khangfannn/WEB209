//collection category in mongoDB . 

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectID = Schema.ObjectID;

const categorySchema = new Schema({
            name:{type:String, required:true},
            desc:{type:String, required:true},
        });
module.exports = mongoose.models?.category || mongoose.model('category' , categorySchema);