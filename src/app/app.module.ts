import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component'
import { StoreModule } from '@ngrx/store';
import { reducers } from './+store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    CoreModule,
    SharedModule, 
    StoreModule.forRoot(reducers),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
