var express = require('express');
var router = express.Router();
const multer = require('multer');


let storage = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,'./public/images')
  },
  filename: function (req,file,cb){
    cb(null,file.originalname)
  }
});

function checkFileUpload(req,file,cb) {
  if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('You must provide a file name'))
  }
  cb(null,true)
}

let upload = multer({storage:storage,fileFilter:checkFileUpload})
/* GET products listing. */
//http://localhost:3000/products
const pros = [
  {id:1, name: 'pro1', price: 100, img: 's1.jpg'},
  {id:2, name: 'pro2', price: 200, img: 's2.jpg'},
  {id:3, name: 'pro3', price: 300, img: 's3.jpg'},
  {id:4, name: 'pro4', price: 400, img: 's4.jpg'},
]
router.get('/', function(req, res, next) {
  //res.send('trang sản phẩm');
  res.render('product',{pros})
});
router.get('/addpro',(req,res)=>{
  res.render('addpro')
})
router.post('/addpro',upload.single('img'),(req,res)=>{
  const {name,price} = req.body;
  let img = req.file.originalname
  const newPro = {
    id: pros.length + 1,
    name,
    price,
    img
  }
  pros.push(newPro);
  res.redirect('/products')
})
router.get('/detail/:id',(req,res)=>{
  const{id} = req.params;
  let pro = pros.find(item => item.id == id);
  res.render('detail',{pro})
})

router.get('/edit/:id',(req,res)=>{
  let id = req.params.id;
  let pro = pros.find(item => item.id == id);

  res.render('edit',{pro})
})

router.post('/edit',upload.single('img'),(req,res)=>{
  const {id,name,price} = req.body;
  let img = req.file ? req.file.originalname : req.body.imgOld
  let pro = pros.findIndex(item => item.id == id)
 
   pros[pro] = {
    id,
    name,
    price,
    img
  }
 
  res.redirect('/products')
})

router.get('/delete/:id',(req,res) => {
  const {id} = req.params
  const pro = pros.findIndex(i=> i.id == id)
  pros.splice(pro,1)
  res.redirect('/products')
})

module.exports = router;
