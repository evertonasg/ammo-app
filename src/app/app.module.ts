import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { NavComponent } from './nav/nav.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { FormsModule } from '@angular/forms';
import { FiltroProdutoPipe } from './produtos/filtro-produto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProdutosComponent,
    FiltroProdutoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
