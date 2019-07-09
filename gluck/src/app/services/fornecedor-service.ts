import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Fornecedor } from 'src/model/fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private _fornecedores: Fornecedor[] = [];

  constructor(private http: HttpClient) {
    this._bootstrap();
  }

  public async _bootstrap(): Promise<void> {
    this._fornecedores = await this.getFornecedores();
  }

  public get fornecedores(): Fornecedor[] {
    return this._fornecedores;
  }


  private async getFornecedores(): Promise<Fornecedor[]> {
    const promise = new Promise<any>(async (resolve, reject) => {
      return this.http.get("/assets/fornecedores.json").subscribe(
        (data: any[]) => {
          var __fornecedor: Fornecedor[] = [];
          data.forEach(obj => __fornecedor.push(Fornecedor.deserialize(obj)));
          resolve(__fornecedor);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          reject(null);
        });
    });
    return promise;
  }

  public async getFornecedor(id: Number): Promise<Fornecedor> {
    const promise = new Promise<Fornecedor>(async (resolve, reject) => {
      if (this._fornecedores.length == 0)
        this._fornecedores = await this.getFornecedores();

      var off = this._fornecedores.find(off => off.id == id);
      resolve(off);
    });
    return promise;
  }

}
