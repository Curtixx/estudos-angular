import { Component } from '@angular/core';

@Component({
  selector: 'app-valida',
  templateUrl: './valida.component.html',
  styleUrls: ['./valida.component.css']
})
export class ValidaComponent {
  name: string = '';

  valida(): void{
    if(this.name.length <=2) console.log('nome invalido');
  }

}
