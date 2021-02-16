import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IThemeModuleState } from '../+store';
import { themeListLoadThemeList } from '../+store/actions';


@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

  themeList$ = this.store.select(state => state.theme.list.themeList)
  isLoading$ = this.store.select(state => state.theme.list.isLoading)
  constructor( private store: Store<IThemeModuleState>) { }

  ngOnInit(): void {
    this.store.dispatch(themeListLoadThemeList());
  }
}
