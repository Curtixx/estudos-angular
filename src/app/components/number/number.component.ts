import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  onChange(): void{
    this.changeNumber.emit()
  }

}
