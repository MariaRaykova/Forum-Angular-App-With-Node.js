import { createAction, props } from '@ngrx/store'; 
import { ITheme } from 'src/app/shared/interfaces';
import { IPost } from 'src/app/shared/interfaces/post';

const themeDetailsNamespace = `[THEME DETAILS]`;
export const themeDetailsSetTheme = createAction(`${themeDetailsNamespace} Set Theme Details`, props<{ theme: ITheme<any> }>()); 
export const themeDetailsSetLoading = createAction(`${themeDetailsNamespace} Set Theme Loading`, props<{ isLoading: boolean }>()); 
export const themeDetailsClear = createAction(`${themeDetailsNamespace} Clear`); 


const themeListNamespace = `[THEME LIST]`;
export const themeListSetThemeList = createAction(`${themeListNamespace} Set Theme List`, props<{themeList: ITheme<any>[]}>()) 
export const themeListLoadThemeList = createAction(`${themeListNamespace} Load Theme List`) 
export const themeListLoadError = createAction(`${themeListNamespace} Load Theme List Error`, props<{error: string}>()) 

export const ThemeListSetLoading = createAction(`${themeListNamespace} Set Theme Loading`, props<{ isLoading: boolean }>()); 
export const ThemeListClear = createAction(`${themeListNamespace} Clear`); 

export const themeListSetPostList = createAction(`${themeListNamespace} Set Post List`, props<{postList: IPost[]}>()) 
export const themeListLoadPostList = createAction(`${themeListNamespace} Load Post List`)
export const themeListLoadPostListError = createAction(`${themeListNamespace} Load Post List Error`, props<{error: string}>())  