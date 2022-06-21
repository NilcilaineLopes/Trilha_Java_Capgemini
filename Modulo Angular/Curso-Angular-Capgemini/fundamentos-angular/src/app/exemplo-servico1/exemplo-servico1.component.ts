import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-servico1',
  templateUrl: './exemplo-servico1.component.html',
  styleUrls: ['./exemplo-servico1.component.css']
})
export class ExemploServico1Component {
  nome = "";

  adcionarNome() {
    console.log(`O nome ${this.nome} foi adicionado`);
  }
}
