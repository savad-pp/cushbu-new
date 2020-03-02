import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
validationDiv=true;
public flag = true;
public status:string;
public pass;
public passcon;

  constructor(private createUser:RegisterService) { }

  ngOnInit() {
  }


  getpass(val){
 this.pass = val.target.value;
  }
  getpasscon(val){
    this.passcon = val.target.value;
    this.check();
     }
     check(){
      if(this.pass != this.passcon){
        this.status = "password dosent match";
        this.validationDiv = false;
        this.flag = true;
      }
      else{
        this.flag = false;
        this.validationDiv = true;
      }
     }
  register(form: NgForm) {
    console.log(form.value);
    try{
      this.createUser.registerUser(form.value.name,form.value.email,form.value.password,form.value.refferedby)
    }
    catch(err){
      this.status = err;
      this.validationDiv = false;
    }
    
    
  }
}
