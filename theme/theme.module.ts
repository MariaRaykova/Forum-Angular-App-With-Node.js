import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { CoreModule } from '../core/core.module';
import { ThemeNewComponent } from './theme-new/theme-new.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './+store';
import { EffectsModule } from '@ngrx/effects';
import { ThemeListEffects } from './+store/effects';

@NgModule({
  declarations: [
    ThemeListComponent,
    ThemeListItemComponent,
    ThemeNewComponent, 
    ThemeDetailsComponent
  ],
  imports: [
    CommonModule, 
    CoreModule, 
    SharedModule,
    ThemeRoutingModule,
    FormsModule,
    StoreModule.forFeature('theme', reducers),
    EffectsModule.forFeature([ThemeListEffects])
  ], 
  providers: [
    ThemeListEffects
  ],
  exports: [
    ThemeListComponent,
    ThemeListItemComponent
  ]
})
export class ThemeModule { }
