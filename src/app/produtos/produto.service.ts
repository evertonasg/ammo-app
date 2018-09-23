import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private _http: HttpClient){ }

  lista() {
    return this._http.get(`${API_URL}/produtos/`);
  }
}
