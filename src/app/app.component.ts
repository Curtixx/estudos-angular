import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = "Henrique Curtis"
  idade = 17
  dados = {
    cor: "branco",
    cpf: "479.076.598-92"
  }

  title = 'portfolio';
}
