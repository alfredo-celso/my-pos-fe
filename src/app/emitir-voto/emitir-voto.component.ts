import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emitir-voto',
  templateUrl: './emitir-voto.component.html',
  styleUrls: ['./emitir-voto.component.css']
})
export class EmitirVotoComponent implements OnInit {

  b_estaIniciado: boolean;
  b_estaFinalizado: boolean;
  b_haVotado: boolean;
  b_puedeVotar: boolean;

  constructor() { }

  ngOnInit() {
    this.b_estaIniciado = true;
    this.b_estaFinalizado = false;
    this.b_haVotado = false;
    this.b_puedeVotar = true;
  }

  confirmar(){
      this.b_puedeVotar = true;
  }

  votar(){
    this.b_puedeVotar = true;
    this.b_haVotado = false;
  }

}
