import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { ComponenteServicoComponent } from './componenteservico/componenteservico.component';
import { ComponenteServico2Component } from './componenteservico2/componenteservico2.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    ComponenteServicoComponent,
    ComponenteServico2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
