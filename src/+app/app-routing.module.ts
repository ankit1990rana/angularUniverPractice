import { Router, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./+home/home.component";
import { MapsComponent } from './+maps/maps.component';
// export function getUserModule() {
//   return System.import('./+user/user.module' + (process.env.AOT ? '.ngfactory' : ''))
//     .then(mod => mod[(process.env.AOT ? 'userModuleNgFactory' : 'userModule')]);
// }

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'user', loadChildren: './+user/user.module#userModule' } //Lazy loading
];

export const routing = RouterModule.forChild(APP_ROUTES) 