import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `User Componenet 
            <hr/>
            <nav>
  <a [routerLink]="['list']" class="enter-btn" routerLinkActive="active" *ngIf="isLoggedin()" >List</a>
  <input type="text" #userID (input)="0" />
  <a [routerLink]="['detail',userID.value]" class="enter-btn" routerLinkActive="active" *ngIf="isLoggedin()" > Detail </a>
  <a [routerLink]="['create']" class="enter-btn" routerLinkActive="active" *ngIf="isNotLoggedin()" >Register</a>
  <a [routerLink]="['login']" class="enter-btn" routerLinkActive="active"*ngIf="isNotLoggedin()" >Login </a>
  <a [routerLink]="['dataform']" class="enter-btn" routerLinkActive="active" *ngIf="isNotLoggedin()" >Data driven form</a>
  <a href="#" class="enter-btn"  *ngIf="isLoggedin()" (click)= "logout()" >Logout</a>
</nav>
        <router-outlet></router-outlet>`,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 // private isLoggedin:Boolean;
  constructor() { 
  }

  ngOnInit() {
   
  }

  logout(){
    localStorage.removeItem("username");
  }

  isLoggedin(){
     if(localStorage.getItem("username")){
            return true;
        }else{
            return false;
        }
  }
  isNotLoggedin(){
     if(localStorage.getItem("username")){
            return false;
        }else{
            return true;
        }
  }

}
