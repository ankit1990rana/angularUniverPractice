import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

   private lat: number
   private lng: number;

  constructor() { 
    this.lat = 51.678418;
    this.lng = 7.809007;
  }

  ngOnInit() { }

}
