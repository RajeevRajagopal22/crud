import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementModule } from './user-management/user-management.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserManagementModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
