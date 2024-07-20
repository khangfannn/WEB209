const userModel = require('./user.model.js');
const { model } = require('mongoose');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
module.exports = {getAll,adduser,userLogIn};

async function getAll(){
    try {
        const result = await userModel.find();
        return result;
} catch (error){
    console.log('Error : Cant get all product: ', error);
    throw error;

}
}
async function adduser(body){
    try {
        let {name , mail , password,phone , role} = body;
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt);
        user = new userModel({name , mail , password: hash,phone , role : role ||1});
        const result = await user.save();
        return result;

    }catch (error){
            throw error;
    };
}
async function userLogIn(body){
    try {
        const {mail,password} = body;
        let user = await userModel.findOne({mail: mail});
        if(!user){
            throw new Error("Email not found");
        }
        const checkPass = bcrypt.compareSync(password,user.password);
        if(!checkPass){
            throw new Error("Wrong password");
        }

        delete user._doc.password;

        const token = jwt.sign({_id:user._id,mail:user.mail,role:user.role},
            "khang",
            {expiresIn:"1D"})

        user = {...user._doc,token};

        return user;

    } catch (error) {
        
    }
}

