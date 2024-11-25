import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first-component/first-component.component';
import { SecondComponent } from './second-component/second-component.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/user/list',
    pathMatch:'full'
  },

  {
    path:'first',
    component:FirstComponent,
  },
  {
    path:'second',
    component:SecondComponent
  },
  {
  path:'user',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:'crud',
    loadChildren: () => import('./crud-operation/crud-operation.module').then(m => m.CrudOperationModule)
  }
//egar
//lazy
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
