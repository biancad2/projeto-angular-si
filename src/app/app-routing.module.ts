import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { IndexComponent } from './index/index.component';

import { DetalhesProjetosBiancaComponent } from './detalhes-projetos-bianca/detalhes-projetos-bianca.component';
import { ProjetosBiancaComponent } from './projetos-bianca/projetos-bianca.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'bitcoin', component: BitcoinComponent },
  
  { path: 'biancaprojetos', component: ProjetosBiancaComponent },
  { path: 'projetosbianca/:name', component: DetalhesProjetosBiancaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
