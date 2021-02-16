import { RouterModule, Routes } from "@angular/router";
import { ThemeDetailsComponent } from "./theme-details/theme-details.component";
import { ThemeListComponent } from "./theme-list/theme-list.component";
import { ThemeNewComponent } from "./theme-new/theme-new.component";


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ThemeListComponent,
        data: {
            title: 'THEMES'

        }

    },
    {
        path: 'details/:id',
        component: ThemeDetailsComponent,
        data: {
            title: 'THEME DETAILS',
            isLogged: true
        }

    },
    {
        path: 'new',
        component: ThemeNewComponent,
        data: {
            title: 'NEW THEME',
            isLogged: true
        }
    }
];
export const ThemeRoutingModule = RouterModule.forChild(routes);