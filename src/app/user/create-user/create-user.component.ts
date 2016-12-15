import { Component, OnInit } from '@angular/core';
import { NgForm, NgControl } from "@angular/forms";
/** Interfaces  */
import { userInit } from './interfaces/user.interface';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private user = new userInit().user; // Initilize User 
  gender = ['male', 'female'];
  
  constructor() { }

  ngOnInit() { }

  registerUser(user){
    console.log(user);
  }

}
