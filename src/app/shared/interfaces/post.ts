import { IBase } from "./base";
import { ITheme } from "./theme";
import { IUser } from "./user";

export interface IPost extends IBase {
    likes: string[];
    _id: string;
    text: string;
    userId: IUser;
    themeId: ITheme<string[]>;
}