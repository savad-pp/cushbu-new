import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
public loguser
public auth 

  constructor(private http:HttpClient,private router:Router) { }

  loginUser(email:string,password:string){
    const userData = {email:email,password:password}
    this.http.post("http://localhost:3000/userlogin/login",userData).subscribe(async result=>{
     
   
   if(result["status"]!="succecc auth"){
      
      this.authFunc()
    this.router.navigate(['/login'])
    this.auth =await false

   }else{
   
    const logUserdata = {name: result["data"].name, email:result["data"].email, primarywallet: result["data"].primarywallet, secondarywallet: result["data"].secondarywallet, refferalcode: result["data"].refferalcode};
    this.loguser = logUserdata
    this.auth = true
    this.router.navigate(['/dashboard'])

   }
      

    })
}
async authFunc(){
  
  this.auth =await true
  console.log("auth fun",this.auth)
  return
}
}