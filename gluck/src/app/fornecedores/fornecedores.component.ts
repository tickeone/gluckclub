import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Fornecedor } from 'src/model/fornecedor.model';
import { FornecedorService } from '../services/fornecedor-service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.sass']
})
export class FornecedoresComponent implements OnInit {

  constructor(private fornecedorService: FornecedorService) { }

  public fornecedores: Fornecedor[];

  ngOnInit() {
  }

  produtos(idFornecedor: Number){
    window.open('fornecedor/' + idFornecedor, "_blank");
  }
}