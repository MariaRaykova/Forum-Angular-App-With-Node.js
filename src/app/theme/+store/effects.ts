import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { PostService } from "src/app/core/post.service";
import { ThemeService } from '../theme.service';
import { themeListLoadPostList, themeListLoadPostListError, themeListLoadThemeList, themeListSetPostList, themeListSetThemeList } from "./actions";
@Injectable()
export class ThemeListEffects {
    constructor(
        private actions$: Actions,
        private themeService: ThemeService,
        private postService: PostService
    ) { }
   
    loadThemeList$ = createEffect(() => this.actions$.pipe(
        ofType(themeListLoadThemeList),
        switchMap(() => this.themeService.loadThemeList()),
        map(themeList => themeListSetThemeList({ themeList }))
    ));
    loadPostList$ = createEffect(() => this.actions$.pipe(
        ofType(themeListLoadPostList),
        switchMap(() => this.postService.loadPost(5).pipe(
            catchError((error => [new Error('BAD ERROR')])))), 
        map(result => result instanceof Error ?
            themeListLoadPostListError({ error: result.message }) :
            themeListSetPostList({ postList: result }))
    )
    );
}