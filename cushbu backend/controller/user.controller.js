const db = require('../services/db.service');
const userModel = require('../models/user.mode');
const crypto = require('crypto');
const bcrypt=require('bcryptjs')

function getuser(){
 return userModel.find();
}

async function addUser(data){
    let status=null
    let newUser = data;
    newUser.refferalcode =await crypt(newUser.name);
    newUser.primarywallet =await checkrefferal(newUser.refferedby);
    newUser.secondarywallet = 0;
    newUser.password = await encryptPassword(newUser.password)
   const user = newUser;
    xuser = new userModel(user);
    await xuser.save().then(result=>{
        status = result
    }).catch(err=>{     
      status = "Error_user"
    })
    return status   
}
function crypt(value){  
    var res = value.slice(0, 4);
    const upercaseString = res.toUpperCase()
 const referalCode = upercaseString + crypto.randomBytes(4).toString('hex');
 return referalCode;
}
 async function  checkrefferal(value){
    let x = 25;
     try {
    const resp = await userModel.findOne({refferalcode: value})
    if(resp != null){
        x = 100;
    }
    return x;
    }
        catch(err){
        console.log(err)
    }
}
async function encryptPassword(password){
const encryptPassword = await bcrypt.hash(password,10)
return encryptPassword
}


async function userLogin(logindata){
    let status = {status:"",data:""}  
    fetchdata = "" 
    let st=1
  await  userModel.findOne({email : logindata.email}).then(result=>{
       if(!result){          
          // console.log("!result",result)
        status =  {status:"failed auth",data:"Invalid user"} 
        st=0         
       }
       else{
       // console.log("result",result)
        fetchdata = result
        return bcrypt.compare(logindata.password,result.password) 

       }
      
    }      
    ).then(res=>{
      // console.log("then then",res)
       if(res == true){
        status =  {status:"succecc auth",data:fetchdata}   
       }else{
           if(st==1){
            status =  {status:"failed auth",data:"Password do not matched"}  

           }
        

       }
       
    }

    ).catch(      
        status =  {status:"failed auth",data:"fail"}
    )
    return  status
   }

module.exports.getuser = getuser;
module.exports.addUser = addUser;
module.exports.userLogin = userLogin;