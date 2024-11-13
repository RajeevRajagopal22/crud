import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceHeaderComponent } from './ecommerce-header/ecommerce-header.component';
import { EcommerceSidebarComponent } from './ecommerce-sidebar/ecommerce-sidebar.component';



@NgModule({
  declarations: [
    EcommerceHeaderComponent,
    EcommerceSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [EcommerceHeaderComponent, EcommerceSidebarComponent]
})
export class SharedModule { }
