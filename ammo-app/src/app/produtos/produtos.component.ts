import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { ProdutoService } from './produto.service';
import { Produto } from './produto';
import { PageEvent, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[];
  produtosView: Produto[];

  @Input() filtro: string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;

  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex = 0; //auxiliar para paginação

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private _produtoService: ProdutoService) { }

  ngOnInit() {
    
    this._produtoService.lista()
    .subscribe((produto: any) => {
      this.produtos = produto.produtos;
      
      this.length = this.produtos.length;
      this.pageIndex = 0;    
    });
  }

  updatePaginator(event)
  {    
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  exibeProduto(idx: number): boolean {
    const posIni = this.pageSize * this.pageIndex;
    const posFim = posIni + this.pageSize;
    
    return (idx >= posIni && idx < posFim);
  }

  getImagem(produto: Produto): string {
    return `../../assets/img/${produto._id}.jpg`;
  }

  descricaoCategoria(id: number): string {
    
    switch(id)
    {
      case 0: return 'Calçados';
      case 1: return 'Camisas';
      case 2: return 'Meias';
      case 3: return 'Acessórios esportivo';
      case 4: return 'Bonés';
      case 5: return 'Bolas';
      case 6: return 'Bermudas';
      default: '';
    }
  }
}
