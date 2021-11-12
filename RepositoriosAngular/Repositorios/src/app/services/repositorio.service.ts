import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { Repos } from '../components/repositorio/repos';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  private readonly API = 'https://localhost:44300/User/dadosUsuario';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Repos>(this.API)
      .pipe(
        tap(console.log)
      )
  }

}
