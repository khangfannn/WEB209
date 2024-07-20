var express = require('express');
var router = express.Router();
const productController = require('../mongo/products.controller');
const productsModel = require('../mongo/products.model');

// http:localhost:3000/product
router.post('/', async(req, res, ) => {
  try {
    const body = req.body;
    const result = await productController.insert(body);
    return result.status(200).json({productNew: result});
  } catch (error) {
    console.log('loi insert '+ error);

  }
});

router.delete('/', async(req, res, ) => {
  try {
      const {_id} = req.params;
      const DelProd = await productController.removeProd(_id);
      return res.status(200).json({DelProd});

  } catch (error) {
    console.log('Error:', error);
  }
});  
router.get('/details/:_id', async (req, res, ) => {
  try {
      const productsID = req.params._id;
       const details = await productsModel.findById(productsID);
       if(!details){
          return res.status(404).send('Product not found');
       }
       res.json(details);

  } catch (error) { 
    console.log("eror:",error);
    res.status(500).json({error: "Error Proccessing Product"});
  }
});
module.exports = router;