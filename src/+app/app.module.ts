import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MapsComponent } from './+maps/maps.component';
import { HomeComponent } from './+home/home.component';

import { SharedModule } from './shared/shared.module';

import { routing } from './app-routing.module';


@NgModule({
  declarations: [ 
    AppComponent,
    MapsComponent,
    HomeComponent
     ],
  imports: [
    SharedModule,
    routing
  ]
})
export class AppModule { }

//export { AppComponent } from './app.component';
