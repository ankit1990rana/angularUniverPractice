import { Router, Routes, RouterModule } from '@angular/router';
import { UserComponent } from "./user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { LoginComponent } from "./login/login.component";
import { DataDrivenFormComponent } from "./data-driven-form/data-driven-form.component";

/** Guards */
import { userDetailGuard } from "./user-detail/user-detail.guard";
import { authGuard } from "./auth.guard";

const USER_ROUTES: Routes = [
    {
        path: '', component: UserComponent, children: [ // This would not match
            { path: 'list', component: UserListComponent },
            { path: 'dataform', component : DataDrivenFormComponent },
            { path: 'create', component: CreateUserComponent },
            { path: 'login', component: LoginComponent },
            { path: 'detail', component: UserDetailComponent, canActivate: [userDetailGuard, authGuard], canActivateChild:[userDetailGuard] },
            { path: 'detail/:id', component: UserDetailComponent, canActivate: [userDetailGuard, authGuard] }
        ]
    },
    { path : '', component : UserComponent } // Hack to match above route
];

export const userRouting = RouterModule.forChild(USER_ROUTES); 