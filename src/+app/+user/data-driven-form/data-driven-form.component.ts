import { Component, ReflectiveInjector } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl, Validators} from "@angular/forms";
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent {

  private registrationForm:FormGroup;
  genders = ['male', 'female'];

  constructor(public formBuilder : FormBuilder, public http: Http) { 
    this.registrationForm = formBuilder.group({
      'userName' : ['Ankit', Validators.required],
      'userEmail' : ['ankit.rana@daffodilsw.com', [Validators.required, this.checkEmail.bind(this)]],
      'userDob' : ['', Validators.required],
      'userPassword' : ['', [this.checkEmpty, this.minPasswordCustomValidator]],
      'userGender' :  ['male']
    });     
  }

  onSubmit(submittedForm){
    console.log(submittedForm);
  }


/**
 * Custom Validators
 * @params : A form control 
 * @returns : A error in of string type
 */
  minPasswordCustomValidator(elm :FormControl): { [error: string]: string }{ // Custom validator
    if(elm.value.length <= 6 && elm.value.length >= 1 ){
      return {error : "Short Password"};
    }
    return null;
  }

  checkEmpty(elm: FormControl):{ [error : string]: string }{
    if(elm.value.length == 0 ){
      return {error : "Required Field"};
      
    }
    return null;
  } 
/**
 * Ansyc Validator
 */
 checkEmail(elm :FormControl): Promise<any>{
       return new Promise((resolve, reject) => {
          this.http.post("http://127.0.0.1:8080/api/auth/validateEmail", elm.value)
               .map(res => console.log(res.json()))
               .subscribe((data) => {
                  console.log(data);
                  resolve(null);
               });
             })
    }   
}

