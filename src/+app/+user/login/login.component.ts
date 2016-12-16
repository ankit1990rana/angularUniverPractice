import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl, Validators} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login:FormGroup;
  constructor( public formBuilder: FormBuilder, public router:Router ) {
      this.login = formBuilder.group({
        'userName' : ['', Validators.required],
        'password' : ['', Validators.required]
      });
   }

  loginUser(user, isValid){
    if(isValid && user.userName == "ankit" && user.password == "123" ){
      localStorage.setItem("username", user.userName );
      this.router.navigate(['/user/list']);
    }
  }
  
  ngOnInit() { }

}
