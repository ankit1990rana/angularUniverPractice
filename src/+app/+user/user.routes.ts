import { Router, Routes, RouterModule } from '@angular/router';
import { UserComponent } from "./user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { DataDrivenFormComponent } from "./data-driven-form/data-driven-form.component";

const USER_ROUTES: Routes = [
    {
        path: '', component: UserComponent, children: [ // This would not match
            { path: 'list', component: UserListComponent },
            { path : 'dataform', component : DataDrivenFormComponent },
            { path: 'create', component: CreateUserComponent },
            { path: 'detail', component: UserDetailComponent },
            { path: 'detail/:id', component: UserDetailComponent }
        ]
    },
    { path : '', component : UserComponent } // Hack to match above route
];

export const userRouting = RouterModule.forChild(USER_ROUTES); 