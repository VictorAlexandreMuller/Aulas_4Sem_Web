import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponenteComponent } from './Aula1Angular/primeiro-componente/primeiro-componente.component';
import { PaiComponent } from './Aula1Angular/pai/pai.component';
import { Filho1Component } from './Aula1Angular/pai/filho1/filho1.component';
import { Filho2Component } from './Aula1Angular/pai/filho2/filho2.component';

const routes: Routes = [
  { path: 'primeiro', component: PrimeiroComponenteComponent },
  {
    path: 'pai',
    component: PaiComponent,
    children: [
      { path: 'filho1', component: Filho1Component },
      { path: 'filho2', component: Filho2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
