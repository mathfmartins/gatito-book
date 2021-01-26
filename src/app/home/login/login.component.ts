import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutenticacaoService } from '../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
   
  }

  login() {
     this.autenticacaoService.autenticar(this.usuario, this.senha)
          .subscribe(
            () => { alert("autenticado!") },
            (err) => { console.log(err) }
          )
  }
}
