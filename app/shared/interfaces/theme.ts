import { IBase } from "./base";
import { IUser } from "./user";

export interface ITheme<T> extends IBase{
    subscribers: string[];
    posts: T[];
    _id: string;
    themeName: string;
    userId: IUser;
}