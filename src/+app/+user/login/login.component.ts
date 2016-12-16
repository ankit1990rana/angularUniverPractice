import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login:FormGroup;
  constructor( public formBuilder: FormBuilder ) {
      this.login = formBuilder.group({
        'userName' : ['', Validators.required],
        'password' : ['', Validators.required]
      });
   }

  loginUser(user, isValid){
    if(isValid && user.userName == "ankit" && user.password == "123" ){
      localStorage.setItem("username", user.userName );
    }
  }
  
  ngOnInit() { }

}
