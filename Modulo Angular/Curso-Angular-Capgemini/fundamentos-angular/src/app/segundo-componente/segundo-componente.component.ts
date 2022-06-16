import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Pipi";
  dataNascimento = "2020-10-06";
  urlImagem = "/assets/pipi.jpeg";

  mostrarDataNascimento() {
    alert(`A data de nascimento do pipi é: ${this.dataNascimento}`);
  }

}
