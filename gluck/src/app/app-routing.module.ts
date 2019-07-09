import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';

const routes: Routes = [
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: 'fornecedor/:id', component: FornecedorComponent },

  { path: '', redirectTo: 'fornecedores', pathMatch: 'full' },
  { path: '**', redirectTo: 'fornecedores' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
