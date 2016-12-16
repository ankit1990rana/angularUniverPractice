import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';

import { UserComponent } from './user.component';
import { userRouting } from "./user.routes";
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DataDrivenFormComponent } from './data-driven-form/data-driven-form.component';
import { LoginComponent } from './login/login.component';
/** Guards */
import { userDetailGuard } from "./user-detail/user-detail.guard";
import { authGuard } from "./auth.guard";

@NgModule({
    declarations: [
        UserComponent,
        UserListComponent,
        UserDetailComponent,
        CreateUserComponent,
        DataDrivenFormComponent,
        LoginComponent
    ],
    imports: [
        // CommonModule,
        // FormsModule,
        // ReactiveFormsModule,
        // HttpModule,
        userRouting,
        SharedModule
        ],
        providers : [
         userDetailGuard,
         authGuard
        ]
})
export class userModule {}