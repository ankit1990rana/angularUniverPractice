import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { MapsComponent } from './+maps/maps.component';
import { HomeComponent } from './+home/home.component';
import { AnimationComponent } from './+animation/animation.component';

import { SharedModule } from './shared/shared.module';

import { routing } from './app-routing.module';



@NgModule({
  declarations: [ 
    AppComponent,
    MapsComponent,
    HomeComponent,
    AnimationComponent
     ],
  imports: [
    SharedModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1w_PbRJlmKU2_b-HoNuur5J3Cw5x-ZDE'
    })
  ]
})
export class AppModule { }

//export { AppComponent } from './app.component';
