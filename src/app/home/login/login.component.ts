import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private autenticacaoService: AutenticacaoService,
              private router: Router) { }

  ngOnInit(): void {
   
  }

  login() {
     this.autenticacaoService.autenticar(this.usuario, this.senha)
          .subscribe( 
            () => this.router.navigate(['animais']),
            (err) => {
               alert('usuário ou senha inválido'),
               console.log(err)
            }
          )
  }
}
