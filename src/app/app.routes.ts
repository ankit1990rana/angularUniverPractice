import { Router, Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', loadChildren: 'app/user/user.module#userModule' } //Lazy loading
    // { path: 'home', component: headerComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES) 