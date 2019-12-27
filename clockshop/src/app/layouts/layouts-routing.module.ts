import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutsComponent,
    children: [
      { path:'', redirectTo:'trang-chu', pathMatch:'prefix'},
      { path:'trang-chu', component: DashboardComponent},
      { path: 'san-pham', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
