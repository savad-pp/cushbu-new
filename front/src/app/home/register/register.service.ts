import { Injectable } from '@angular/core';
import {IUserData} from "./registerdata.mode"
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
public primarywallet;
public secondarywallet;
public resultx;
  constructor(private http:HttpClient,private router:Router) { }

  registerUser(name:string,email:string,password:string,refferedby:string){
    const userData:IUserData = {name:name,email:email,password:password,refferedby:refferedby}
    this.http.post("http://localhost:3000/user/register",userData).subscribe(result=>{
    const resdata = {name: result["data"].name, email:result["data"].email, primarywallet: result["data"].primarywallet, secondarywallet: result["data"].secondarywallet, refferalcode: result["data"].refferalcode};
    this.resultx= resdata;
      this.router.navigate(['/dashboard'])

    })

  }

 
}
