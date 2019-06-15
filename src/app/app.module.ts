import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormGroupComponent} from './form-group/form-group.component';
import {HomeComponent} from './home/home.component';
import {DataTableComponent} from './data-table/data-table.component';
import {PrimeNgModule} from './primeng.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, FormGroupComponent, HomeComponent, DataTableComponent, AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}