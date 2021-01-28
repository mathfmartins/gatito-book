import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../autenticacao.service';
import { minusculoValidator } from '../minusculo.validator';
import { NovoUsuario } from '../novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private router: Router,
    private usuarioExistenteService: UsuarioExisteService) { }
     

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['', Validators.required],
      userName: [
        '',
        [Validators.required, minusculoValidator],
        [this.usuarioExistenteService.usuarioJaExiste()],
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]
    ]
    });
  }

  cadastrar() { 
    const novoUsuario = this.novoUsuarioForm?.getRawValue() as NovoUsuario;
    this.novoUsuarioService.cadastrarNovoUsuario(novoUsuario).subscribe(
      () => this.router.navigate(['']),
      (err) => {
        console.log(err);
        alert('Verifique os dados e tente novamente.');
      }
    )
  }
}
