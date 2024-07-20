var express = require('express');
var router = express.Router();
const productController = require('../mongo/products.controller');
const categoryController = require('../mongo/category.controller');
// router.post('/', async(req, res, ) => {
//   try {
//     const body = req.body;
//     const result = await productController.insert(body);
//     return result.status(200).json({productNew: result});
//   } catch (error) {
//     console.log('loi insert '+ error);

//   }
// });

router.get('/', async (req, res, ) => {
  try {
      const products = await productController.getAll();
       res.status(200).json(products);

      // return res.status(200).json({products: products});
  } catch (error) { 
    console.log("eror:",error);
    res.status(404).json({error: "Error Proccessing Product"});
  }
});
router.get('/categories', async (req, res, ) => {
  try {
      const categories = await categoryController.getAll();
       res.status(200).json(categories);

      // return res.status(200).json({products: products});
  } catch (error) { 
    console.log("eror:",error);
    res.status(404).json({error: "Error Proccessing Product"});
  }
});
router.get('/products/:categoryName', async (req, res, ) => {
  try {
    const {categoryName} = req.params;
    const productsByCate = await productController.getByCategoryID(categoryName);
    res.status(200).json(productsByCate);
  }catch (error) {
    console.log(error);
  };
});

module.exports = router;