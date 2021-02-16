import { ActionReducerMap } from "@ngrx/store";
import { IRootState } from "../../../app/+store";
import { IThemeDetailsState, IThemeListState, themeDetailsReducer, themeListReducer } from "./reducers";

export interface IThemeState {
    readonly details: IThemeDetailsState; 
    readonly list: IThemeListState;
}
export interface IThemeModuleState extends IRootState {
   theme: IThemeState
}
export const reducers: ActionReducerMap<IThemeState> = {
    details: themeDetailsReducer,
    list: themeListReducer,
   
}