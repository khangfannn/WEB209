const productModel = require('./products.model');
const categoryModel = require('./category.model');
const { model } = require('mongoose');

module.exports = {insert,getAll,getByCategoryID,getByKey,removeProd};
 
async function insert(body){
    try {
        const {product_name,brand,price,description,size,image,category} = body;
        const categoryFind = await categoryModel.findById(categoryModel)
        if (categoryFind){
            throw new Error(`Cannot insert`)
        }
        const proNew = new productModel({
            product_name,  brand,price,  description,  size,  image,
            category:{
                categoryID:categoryFind._id,
                categoryName:categoryFind.name,
            }
        })
        const result = await proNew.save();
            return result;
    } catch (error) {
        console.log(`Loi insert: ${error}`);
    }
}
async function getAll(){
    try {
            const result = await productModel.find();
            return result;
    } catch (error){
        console.log('Error : Cant get all product: ', error);
        throw error;

    }
}
async function getByCategoryID(categoryName) {
    try {
        const result = await productModel.find({ "categories.categoryName": categoryName });
        return result;
    } catch (error) {
        console.log(`Error: Can't get products by categoryID`, error);
        throw error;
    }
}
async function getByKey(key,value){
    try{
        let pro = await productModel.findOne({[key]: value},' model color quantity price');
        pro = {
            Ma : product._id,
            Ten : product.model,
            Mau : product.color,
            sl : product.quantity,
            Gia: product.price,
            hinh: product.image
        }
        return pro;
    }catch(error){
        console.log('Loi GetbyKey:' , error);
    }
}
async function removeProd(id){
    try {
        const result = await productModel.findByIdAndDelete(id);
        return result;
    } catch (error) {
        log.error('Delete Error: ' ,error);
        throw error;
    }

};
