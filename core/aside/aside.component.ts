import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IThemeModuleState } from 'src/app/theme/+store';
import { themeListLoadPostList } from 'src/app/theme/+store/actions';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  @Input() title: string;
 
  postList$ = this.store.select(state => state.theme.list.postList)
  isLoading$ =  this.store.select(state => state.theme.list.isLoading);
 
  constructor(private store: Store<IThemeModuleState>) { }

  ngOnInit(): void { 
    this.store.dispatch(themeListLoadPostList())
  }
}
