import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [

 
  {
  path: '',
    component: LayoutComponent, // Main layout for authenticated routes
    children: [
  {
    path:'user',
    loadChildren: ()=> import('./user-management/user-management.module').then(m => m.UserManagementModule)
  }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
