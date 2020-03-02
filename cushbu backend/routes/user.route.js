const express = require('express')
const userController = require('../controller/user.controller');
const routes = express.Router();

routes.get('', async (req, res)=>{
   let data = await userController.getuser();
   res.json({status: 'ok', data: data});
})
routes.post('/register', async (req, res)=>{
  let data =await userController.addUser(req.body);
  let status = "success"
  if(data === "Error_user"){
    status = "failed"
    data = "User already created"
  }
  res.json({status: status, data: data})
})

routes.post('/login', async (req, res)=>{
  //console.log(req.body)
  let data = await userController.userLogin(req.body);
  res.json({status: data.status, data: data.data});
})

module.exports.routes = routes;