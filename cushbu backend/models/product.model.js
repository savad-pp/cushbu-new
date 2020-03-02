const mongoose = require('mongoose');
const schema = mongoose.Schema;
const  product = new schema({
   name: String,
   img_url: String,
   category: String,
   details: String,
   smalldetails: String,
   prize: String,
   refferdby: String,
   sharedby: String,
});
const Product = mongoose.model('products',product);
module.exports = Product