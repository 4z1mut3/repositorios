import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositorioComponent } from './components/repositorio/repositorio.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {path:'usuario',component:UsuarioComponent},
  {path:'repositorio',component:RepositorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
