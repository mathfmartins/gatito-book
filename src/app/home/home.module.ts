import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutenticacaoService } from './autenticacao.service';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';


@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MensagemModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent],
  providers: [
    AutenticacaoService
  ]
})
export class HomeModule { }
