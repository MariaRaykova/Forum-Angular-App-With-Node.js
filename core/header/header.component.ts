import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, throttleTime } from 'rxjs/operators';
import { UserService } from '../../user/user.service'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  isLogged$ = this.authService.isLogged$;
  
  hideNavigation = false;
  constructor(public authService: AuthService, public router: Router) {
     router.events.pipe(filter(e => e instanceof ActivationEnd), throttleTime(0)).subscribe((e: ActivationEnd) => { 
       this.hideNavigation = !!e.snapshot.data?.noNavigation;
     })
  }
  logoutHandler(): void {
    this.authService.logout().subscribe(()=>this.router.navigate(['/user/login']));
  }
}
