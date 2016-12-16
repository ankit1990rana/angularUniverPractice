import  { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import  { Observable } from "rxjs/Rx";

export class userDetailGuard implements CanActivate{
    
    canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        console.log(route, state);
        return confirm("Are you sure ?");
    }
}