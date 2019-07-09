import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../services/produto-service';
import { Produto } from 'src/model/produto.model';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.sass']
})
export class FornecedorComponent implements OnInit {

  public idFornecedor: Number;
  public produtos: Produto[];
  
  constructor(private produtoService: ProdutoService, private activatedRouter: ActivatedRoute) { }

  async ngOnInit() {
    this.activatedRouter.params.subscribe(params => this.idFornecedor = params.id);
    this.produtos = await this.produtoService.getProdutosByFornecedor(this.idFornecedor);
  }
}