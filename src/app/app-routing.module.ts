import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidaComponent } from './components/valida/valida.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';

const routes: Routes = [
  {path: '', component: ValidaComponent},
  {path: 'primeiro', component: PrimeiroComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
