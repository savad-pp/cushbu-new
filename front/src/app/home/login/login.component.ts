import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public status;
public validationDiv = false;
public error = "Authentication failed!"
public auth = true

  constructor(private loginSer:LoginService) { }

  ngOnInit() {
  }
  async login(form: NgForm) {
   //   console.log(form.value);
    try{  
    await this.loginSer.loginUser(form.value.email,form.value.password)
    
    this.auth =await  this.loginSer.auth

    console.log('auth',this.auth)
    if(this.auth == false ){
      this.validationDiv = true
    }else(
      
      
      this.auth = true
    )
   
   
    }
    catch(err){
      this.status = err;
      this.validationDiv = false;
    }
   
    
    
  }
}
