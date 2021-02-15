import { Component, DoCheck} from '@angular/core';
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLogged$ = this.authService.isLogged$;
  constructor(private authService: AuthService) { }
}
