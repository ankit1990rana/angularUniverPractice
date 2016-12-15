import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  private params:any;

  constructor(private activatedRoute:ActivatedRoute) {
      activatedRoute.params.subscribe(
       (params : any) => { 
         this.params = params['id']
         console.log(this.params);
       }
    );
   }

  ngOnInit() {

  }

}
