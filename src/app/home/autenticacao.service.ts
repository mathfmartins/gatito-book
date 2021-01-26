import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_LOGIN = 'http://localhost:3000/user/login';

@Injectable()
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  autenticar(usuario: string, senha: string) : Observable<any> { 
      return this.httpClient.post('http://localhost:3000/user/login', { userName: usuario, password: senha });
  }
}
