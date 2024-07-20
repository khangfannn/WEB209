var express = require('express');
var router = express.Router();
const userController = require('../mongo/user.controller');
/* GET users listing. */
//http://localhost:3000/users
router.get('/', async (req, res, ) => {
  try {
      const users = await userController.getAll();
       res.status(200).json(users);

      // return res.status(200).json({products: products});
  } catch (error) { 
    console.log("eror:",error);
    res.status(404).json({error: "Error Proccessing Product"});
  }
});
router.post('/register', async (req, res, next) => {
  try{
    let body = req.body;
    const result = await userController.adduser(body);
    if (result){
      res.status(200).json({newUser: result , messages: `Account Created Succesfully` , status:"OK"});
    }
  }catch (error) {
    res.status(500).json({error:error});
    console.log("Lỗi" + error.message);
  };
})
router.post('/login', async (req, res) => {
  try{
    let body = req.body;
    const result = await userController.userLogIn(body);
    if (result){
      res.status(200).json({result , messages: `You have logged in as ${user.mail}` , status:"OK"});
    }else{
      res.json({message: " Your e-mail are password isn't correct "})
    }
  }catch (error) {
    res.status(500).json({error:error});
    console.log("Lỗi" + error.message);
  };
})
module.exports = router;
