import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './components/segundo-componente/segundo-componente.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { NumberComponent } from './components/number/number.component';
import { ValidaComponent } from './components/valida/valida.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    DiretivasComponent,
    EmitterComponent,
    NumberComponent,
    ValidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
