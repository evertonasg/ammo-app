import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from './produto';

@Pipe({
  name: 'filtroProduto'
})
export class FiltroProdutoPipe implements PipeTransform {

  transform(produtos: Produto[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery){
      return produtos.filter(produto =>
          produto.nome.toLowerCase().includes(descriptionQuery));
    }
    else{
        return produtos;
    }
  }

}