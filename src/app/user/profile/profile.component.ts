import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/auth.service';
import { IUserModuleState } from '../+store';
import { userProfileSetEditMode, userProfileSetErrorMessage, userProfileSetLoading } from '../+store/actions';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isLoading$ = this.store.select(state => state.user.profile.isLoading);
  inEditMode$ = this.store.select(state => state.user.profile.isEdit);
  errorMessage$ = this.store.select(state => state.user.profile.errorMessage);
  currentUser$ = this.authService.currentUser$;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private store: Store<IUserModuleState>
  ) { }
 
  toggleEditMode(currentValue): void {
    this.store.dispatch(userProfileSetEditMode({ isEdit: !currentValue }));
  }

  submitHandler(data: any): void {
    this.store.dispatch(userProfileSetLoading({ isLoading: true }));

    this.userService.updateProfile(data).subscribe({
      next: () => {
        this.store.dispatch(userProfileSetEditMode({ isEdit: false }));
      },
      error: (err) => { 
        this.store.dispatch(userProfileSetErrorMessage({ message: err.error.message }));
      }
    })
  }
}
