import { ComponenteServicoComponent } from './componenteservico/componenteservico.component';
import { ComponenteServico2Component } from './componenteservico2/componenteservico2.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente2Component } from './componente2/componente2.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';

import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path:'componente1', component:Componente1Component},
  {path:'componente2', component:Componente2Component},
  {path:'componente3', component:Componente3Component},
  {path:'componente4', component:Componente4Component},
  {path:'componenteservico', component:ComponenteServicoComponent},
  {path:'componenteservico2', component:ComponenteServico2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
