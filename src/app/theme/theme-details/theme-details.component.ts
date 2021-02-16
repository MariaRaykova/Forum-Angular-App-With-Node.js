import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IThemeModuleState } from '../+store';
import { themeDetailsClear, themeDetailsSetTheme } from '../+store/actions';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css']
})
export class ThemeDetailsComponent implements OnInit, OnDestroy {
  theme$ = this.store.select(state => state.theme.details.theme);
  isLoading$ = this.store.select(state => state.theme.details.isLoading);
  constructor(
    activatedRoute: ActivatedRoute,
    themeService: ThemeService, 
    private store: Store<IThemeModuleState>
  ) {
    const id = activatedRoute.snapshot.params.id;
    themeService.loadTheme(id).subscribe(theme=>{
      this.store.dispatch(themeDetailsSetTheme({ theme }))
    })
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.store.dispatch(themeDetailsClear());
  }

}
