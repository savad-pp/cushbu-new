import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms'



@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent, NavbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ]
})
export class HomeModule { }
