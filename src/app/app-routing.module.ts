import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { combineLatest } from 'rxjs';


const routes: Routes = [
  {path : "product" , component : ProductComponent},
  
  { path: '', redirectTo: 'product', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 
