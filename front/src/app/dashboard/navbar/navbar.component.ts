import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../home/register/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user;
  constructor(private regapi: RegisterService, private router:Router) { }

  ngOnInit() {
    this.get();
  }
  get(){
    this.user = localStorage.getItem("name");
   }
   logout(){
     localStorage.clear();
     console.log("logOut")
     this.router.navigate(['/'])
   }
}
