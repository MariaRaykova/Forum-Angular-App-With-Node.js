import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { first, map, switchMap, tap } from "rxjs/operators";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
    constructor(
        private authService: AuthService,
        private router: Router 
    ) { }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

       return this.authService.currentUser$.pipe( 
         switchMap(user => user === undefined ? this.authService.authenticate(): [user]),
         map((user) =>{
            const isLoggedFormData = childRoute.data.isLogged; 
            return typeof isLoggedFormData !== 'boolean' || isLoggedFormData === !!user
        }), 
        tap((canContinue) => { 
            if(canContinue){return;}
            const url = this.router.url;
            this.router.navigateByUrl(url);
        }),
        first()
       );
    }

}