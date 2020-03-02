import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../home/register/register.service';
import { Router } from '@angular/router';
// import { IUserData } from '../home/register/registerdata.mode'

import { LoginService } from '../home/login/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user;
  public pw;
  public sw;
  public refcod;
 
  constructor(private regapi: RegisterService, private router:Router,private logApi:LoginService) { }

  ngOnInit() {
    this.registerUser();
    
    this.loginUser()
  }

  registerUser(){
   if(localStorage.getItem("name") != null){
    this.user = localStorage.getItem("name");
    this.pw = localStorage.getItem("pw");
    this.sw = localStorage.getItem("sw");
    this.refcod = localStorage.getItem("refcod");

   }
   else{
  const data = this.regapi.resultx; 
  if(data != undefined){
    this.pw = data.primarywallet;
    this.sw = data.secondarywallet;
    this.user = data.name;
    this.refcod = data.refferalcode;
    localStorage.setItem("name",this.user);
    localStorage.setItem("pw",this.pw)
    localStorage.setItem("sw",this.sw)
    localStorage.setItem("refcod",this.refcod);

  }
   } 
   return
 }
  
 loginUser(){
   console.log("login user")
  if(localStorage.getItem("name") != null){
    this.user = localStorage.getItem("name");
    this.pw = localStorage.getItem("pw");
    this.sw = localStorage.getItem("sw");
    this.refcod = localStorage.getItem("refcod");

   }
   else{
  const data = this.logApi.loguser
  if(data != undefined){
  this.pw = data.primarywallet;
  this.sw = data.secondarywallet;
  this.user = data.name;
  this.refcod = data.refferalcode;
  localStorage.setItem("name",this.user);
  localStorage.setItem("pw",this.pw)
  localStorage.setItem("sw",this.sw)
  localStorage.setItem("refcod",this.refcod);
  }
   } 
   return
 }

};
