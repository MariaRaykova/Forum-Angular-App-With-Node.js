import { createReducer, on } from '@ngrx/store';
import { userLoginSetErrorMessage, userLoginSetLoading, userProfileSetEditMode, userProfileSetErrorMessage, userProfileSetLoading, userRegisterSetErrorMessage, userRegisterSetLoading } from './actions';

export interface ILoginState {
    errorMessage: string, 
    isLoading: boolean
}
export const initialLoginState: ILoginState = { 
    errorMessage: null,
    isLoading: false
}

export const loginReducer = createReducer<ILoginState>(
    initialLoginState, 
    on(userLoginSetErrorMessage, (state, action) => {
        return {...state, errorMessage: action.message}
    }),
    on(userLoginSetLoading, (state, action) => {
        return {...state, loading: action.isLoading}
    }),
);


export interface IRegisterState {
    errorMessage: string, 
    isLoading: boolean
}
export const initialRegisterState: IRegisterState = { 
    errorMessage: null,
    isLoading: false
}

export const registerReducer = createReducer<IRegisterState>(
    initialRegisterState, 
    on(userRegisterSetErrorMessage, (state, action) => {
        return {...state, errorMessage: action.message}
    }),
    on(userRegisterSetLoading, (state, action) => {
        return {...state, loading: action.isLoading}
    }),
);


export interface IProfileState {
    isEdit: boolean;
    isLoading: boolean;
    errorMessage: string, 
}
export const initialProfileState: IProfileState = {
    isEdit: false,
    isLoading: false, 
    errorMessage: ''
}

export const profileReducer = createReducer<IProfileState>(
    initialProfileState, 
    on(userProfileSetEditMode, (state, action) => {
        const currentIsLoading = !action.isEdit ? false : state.isLoading;
        return {...state, isEdit: action.isEdit, currentIsLoading}
    }),
    on(userProfileSetLoading, (state, action) => {
        return {...state, isLoading: action.isLoading}
    }),
    on(userProfileSetErrorMessage, (state, action) => {
        const currentIsLoading = false;
        return {...state, errorMessage: action.message, currentIsLoading}
    }),
);