import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/auth.service';
import { emailValidator, rePasswordValidatorFactory } from 'src/app/shared/validator';
import { IUserModuleState } from '../+store';
import { userRegisterSetErrorMessage, userRegisterSetLoading } from '../+store/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../form-styles.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup; 

  isLoading$ = this.store.select(state => state.user.register.isLoading);
  errorMessage$ = this.store.select(state => state.user.register.errorMessage);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService, 
    private router: Router,
    private store: Store<IUserModuleState>
    ) { 
    const passwordControl = this.fb.control('', [Validators.required, Validators.minLength(5)]);
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, emailValidator]], 
      tel: [''],
      password: passwordControl,
      rePassword: ['', [Validators.required, Validators.minLength(5), rePasswordValidatorFactory(passwordControl)]]
    })
  }
  
  ngOnInit(): void {
  }
  submitHandler(): void{
    const data = this.form.value;
    this.store.dispatch(userRegisterSetLoading({ isLoading: true }));
    this.store.dispatch(userRegisterSetErrorMessage({ message: '' }));

    this.authService.register(data).subscribe({
      next: (resData) =>{
        this.store.dispatch(userRegisterSetLoading({ isLoading: false }));
        this.store.dispatch(userRegisterSetErrorMessage({ message: '' }));
        this.router.navigate(['/']);
      }, 
      error: (err) =>{
        this.store.dispatch(userRegisterSetLoading({ isLoading: false }));
        this.store.dispatch(userRegisterSetErrorMessage({ message: err.error.message }));
      }
    });
  }
}
