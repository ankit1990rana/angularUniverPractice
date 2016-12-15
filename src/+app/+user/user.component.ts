import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `User Componenet 
            <hr/>
            <nav>
  <a [routerLink]="['list']" class="enter-btn" >List</a>
  <input type="text" #userID (input)="0" />
  <a [routerLink]="['detail',userID.value]" class="enter-btn" >Detail</a>
  <a [routerLink]="['create']" class="enter-btn" >Register User</a>
  <a [routerLink]="['dataform']" class="enter-btn" >Data driven form</a>
</nav>
        <router-outlet></router-outlet>`,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
