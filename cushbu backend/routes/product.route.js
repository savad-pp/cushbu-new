const express = require('express')
const productController = require('../controller/product.controller');
const routes = express.Router();

routes.get('', async (req, res)=>{
    data = await productController.getProducts();
    res.json({status: 'ok', data: data});
})
routes.post('',async (req, res)=>{
   const data = await productController.addProduct(req.body);
   res.json({status: "ok", data: data});
})

module.exports.routes = routes;