import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './Aula1Angular/primeiro-componente/primeiro-componente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PaiComponent } from './Aula1Angular/pai/pai.component';
import { Filho1Component } from './Aula1Angular/pai/filho1/filho1.component';
import { Filho2Component } from './Aula1Angular/pai/filho2/filho2.component';
import { MenuSuperiorComponent } from './Aula1Angular/menu-superior/menu-superior.component';
import { RodapeComponent } from './Aula1Angular/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    PaiComponent,
    Filho1Component,
    Filho2Component,
    MenuSuperiorComponent,
    RodapeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
