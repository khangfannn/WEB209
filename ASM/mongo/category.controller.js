const cateModel = require('./category.model.js');
const { model } = require('mongoose');

module.exports = {getAll, getById};

async function getAll(){
    try {
        const result = await cateModel.find();
        return result;
} catch (error){
    console.log('Error : Cant get all categories: ', error);
    throw error;

}
}

async function getById(_id){
    try{
        const result = await cateModel.findById(_id);
        return result;
    }catch (error){
        console.log('Error : Cant get category: ', error);
    }
}