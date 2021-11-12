import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usr } from './usr';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  preserveWhitespaces:true
})
export class UsuarioComponent implements OnInit {


  obj: any;
  constructor(private service: UsuarioService) { }

  ngOnInit() {
     this.service.list().subscribe(dados =>this.obj  = dados);
  }
}
