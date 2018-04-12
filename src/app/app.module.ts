import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EspacepedagoComponent } from './espacepedago/espacepedago.component';
import { IntervenantComponent } from './intervenant/intervenant.component';


@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    EspacepedagoComponent,
    IntervenantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
