//ket noi collection product 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId =Schema.ObjectId;

const usersSchema = new Schema({ 
        name:{type:String, required:true},
        mail:{type:String, required:true},
        password:{type:String, required:true},
        phone:{type:Number, required:true},
        role:{type:Number, required:true || 0},
})
module.exports = mongoose.models.users || mongoose.model('users',usersSchema);


