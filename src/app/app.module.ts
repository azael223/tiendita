import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { StoreFirstGuard } from './store-first.guard';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,StoreModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
