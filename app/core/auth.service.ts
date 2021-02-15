import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError, map } from 'rxjs/operators';
import { IRootState } from '../+store';
import { login, register, logout, authenticate } from '../+store/actions';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$ = this.store.select((state)=>state.auth.currentUser) 
  isReady$ = this.currentUser$.pipe(map(currentUser => currentUser !== undefined ));
  isLogged$ = this.currentUser$.pipe(map(currentUser => currentUser !== null ));
  
  constructor(private http: HttpClient, private store: Store<IRootState>) { }
   
  login(data: any): Observable<any> {
    return this.http.post(`/users/login`, data).pipe(
      tap((user: IUser)=> this.store.dispatch(login({user})))); 
   }
   register(data: any): Observable<any> {
     return this.http
     .post(`/users/register`, data)
    .pipe(tap((user: IUser)=> this.store.dispatch(register({user}))));
    }
   logout():  Observable<any>  {
     return this.http.post(`/users/logout`, {}) 
     .pipe(tap((user: IUser)=> this.store.dispatch(logout())));
   }
   authenticate(): Observable<any>{
    return this.http.get(`/users/profile`).pipe(
      tap((user: IUser)=> this.store.dispatch(authenticate({user}))),
      catchError(() => { 
        this.store.dispatch(login({user: null}))
        return [null]; 
      })
    );
  }
}
