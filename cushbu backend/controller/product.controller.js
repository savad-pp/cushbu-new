const db = require('../services/db.service');
const productModel = require('../models/product.model');

function getProducts(){
   return productModel.find();

}
 async function  addProduct(data){
    let status= '';
    newProduct =  new productModel(data);
    await newProduct.save().then(res=>{
        status = "product created";
    }).catch(err=>{
        status = "product failed";
    });
     return status;
}
module.exports.getProducts = getProducts;
module.exports.addProduct = addProduct;