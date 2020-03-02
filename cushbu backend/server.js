const express = require('express');
const app= express();
const db = require('./services/db.service');
const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(express.json());
app.use(cors(corsOptions));

//routes

app.use('/user',userRoute.routes);
app.use('/product',productRoute.routes);
app.use('/userlogin',userRoute.routes);

app.listen(port, ()=>{
    console.log('server reunning in port' + port);
});