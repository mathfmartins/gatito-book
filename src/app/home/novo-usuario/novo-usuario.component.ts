import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from '../autenticacao.service';
import { NovoUsuario } from '../novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]
    ]
    });
  }

  cadastrar() { 
    const novoUsuario = this.novoUsuarioForm?.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }
}
