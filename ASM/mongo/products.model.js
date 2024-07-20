//ket noi collection product 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId =Schema.ObjectId;

const productsSchema = new Schema({ 
        model:{type:String, required:true},
        color:{type:String, required:true},
        quantity:{type:Number, required:true},
        price:{type:Number, required:true},
        storage_capacity:{type:String, required:true},
        category:
        {
            type: {
                categoryID:{type: ObjectId, required:true},
                categoryName:{type :String,required:true},
                },
            required:true},
        image:{type:String, required:true},

})
module.exports = mongoose.models.product || mongoose.model('product',productsSchema);


