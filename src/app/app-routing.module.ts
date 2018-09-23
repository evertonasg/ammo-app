import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { 
    path: 'produtos', 
    component: ProdutosComponent, 
    data: {
      title: 'Produtos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
