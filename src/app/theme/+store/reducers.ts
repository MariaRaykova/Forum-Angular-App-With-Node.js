import { createReducer, on } from '@ngrx/store';
import { ITheme } from 'src/app/shared/interfaces';
import { IPost } from 'src/app/shared/interfaces/post';
import {  themeDetailsClear, themeDetailsSetLoading, themeDetailsSetTheme, ThemeListClear, themeListLoadPostList, themeListLoadThemeList, ThemeListSetLoading, themeListSetPostList, themeListSetThemeList} from './actions';

export interface IThemeDetailsState {
    theme: ITheme<IPost> | null; 
    isLoading: boolean
}
export const initialThemeDetailsState: IThemeDetailsState = { 
    theme: null,
    isLoading: false
}

export const themeDetailsReducer = createReducer< IThemeDetailsState>(
    initialThemeDetailsState, 
    on(themeDetailsSetTheme, (state, action) => {
        return {...state, theme: action.theme}
    }),
    on(themeDetailsSetLoading, (state, action) => {
        return {...state, isLoading: action.isLoading}
    }),
    on(themeDetailsClear, () => initialThemeDetailsState)
);


export interface IThemeListState{
    themeList: ITheme<any>[] | null;
    postList: IPost[] | null
    isLoading: boolean
}
export const initialThemeListState: IThemeListState = { 
    themeList: null,
    postList:  null,
    isLoading: false
}

export const themeListReducer = createReducer<IThemeListState>(
    initialThemeListState, 
    on(themeListSetThemeList, (state, action) => {
        const isLoading = state.themeList !==null ? false : state.isLoading;
        return {...state, themeList: action.themeList, isLoading}
    }),
    on(themeListSetPostList, (state, action) => {
        const isLoading = state.postList !== null ? false : state.isLoading;
        return {...state, postList: action.postList, isLoading}
    }),
    on(ThemeListSetLoading, (state, action) => {
        return {...state, isLoading: action.isLoading}
    }),
    on(themeListLoadThemeList, (state) => {
        return {...state, isLoading: true}
    }),
    on(themeListLoadPostList, (state) => {
        return {...state, isLoading: true}
    }),
    on(ThemeListClear, () => initialThemeListState)
);


