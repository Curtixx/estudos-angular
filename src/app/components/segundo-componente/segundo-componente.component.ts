import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  @Input() name: string = ''
  @Input() obj!: {cor: string, cpf: string}

}
