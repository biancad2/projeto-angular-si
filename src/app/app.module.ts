import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetosBiancaComponent } from './projetos-bianca/projetos-bianca.component';
import { DetalhesProjetosBiancaComponent } from './detalhes-projetos-bianca/detalhes-projetos-bianca.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetosBiancaComponent,
    DetalhesProjetosBiancaComponent,
    BitcoinComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
