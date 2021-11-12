
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usr } from '../components/usuario/usr';
import { tap } from 'rxjs/internal/operators/tap';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = 'https://localhost:44300/User/dadosUsuario';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Usr>(this.API)
      .pipe(
        tap(console.log)
      )
  }

}
