import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { PolicyComponent } from './policy/policy.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { PantsComponent } from './pants/pants.component';
import { OthersComponent } from './others/others.component';

const routes: Routes = [
  {path:"" ,component :HomeComponent},
  {path : 'policy', component : PolicyComponent} ,
  {path : 'product/details/:id' , component : ProductdetailComponent},
  {path : 'newarrival/category/section/products/newarrival' , component : NewArrivalComponent } ,
  {path : 'shirts/category/section/products/shirts' , component : ShirtsComponent } ,
  {path : 'pants/category/section/products/pants' , component : PantsComponent } ,
  {path : 'others/category/section/products/others' , component : OthersComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
