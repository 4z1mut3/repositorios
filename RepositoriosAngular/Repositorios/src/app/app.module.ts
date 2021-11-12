import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositorioComponent } from './components/repositorio/repositorio.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { TituloComponent } from './components/shared/titulo/titulo.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RepositorioComponent,
    UsuarioComponent,
    NavComponent,
    TituloComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut:3500,
      positionClass:'tost-bottom-right',
      preventDuplicates:true,
      progressBar:true,
      closeButton:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
