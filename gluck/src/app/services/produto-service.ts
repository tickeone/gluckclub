import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Produto } from 'src/model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private _produtos: Produto[] = [];

  constructor(private http: HttpClient) {
    this._bootstrap();
  }

  public async _bootstrap(): Promise<void> {
    this._produtos = await this.getProdutos();
  }

  private async getProdutos(): Promise<Produto[]> {
    const promise = new Promise<any>(async (resolve, reject) => {
      return this.http.get("/assets/produtos.json").subscribe(
        (data: any[]) => {
          var __produto: Produto[] = [];
          data.forEach(obj => __produto.push(Produto.deserialize(obj)));
          resolve(__produto);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          reject(null);
        });
    });
    return promise;
  }

  public async getProdutosByFornecedor(idFornecedor: Number): Promise<Produto[]> {
    const promise = new Promise<Produto[]>(async (resolve, reject) => {
      console.log(this._produtos);
      if (this._produtos.length == 0)
        this._produtos = await this.getProdutos();

      var produtos = this._produtos.filter(prod => prod.idFornecedor == idFornecedor);
      resolve(produtos);
    });
    return promise;
  }

}
