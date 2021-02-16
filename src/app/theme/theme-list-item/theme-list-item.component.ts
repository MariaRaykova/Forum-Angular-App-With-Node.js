import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post';
import { ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.css']
})
export class ThemeListItemComponent implements OnInit {
  @Input() theme: ITheme<IPost>; 

  constructor() { }

  ngOnInit(): void {
  }
}
