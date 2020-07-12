import {Component, NgModule, OnInit} from '@angular/core';
import {Fruta} from './fruta.model';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.html',
  styleUrls: ['./fruta.css']
})

export class FrutaComponent implements OnInit {
  public titulo: string;
  public color: string;
  public colorSeleccionado: string;
  public frutas: Array<Fruta>;
  public tipo: boolean;

  constructor() {
    this.frutas = [
      new Fruta('Limon'),
      new Fruta('Manzana'),
      new Fruta('Naranja')
    ];
    this.tipo = false;
    this.color = 'green';
    this.colorSeleccionado = 'green';
  }

  ngOnInit(): void {
    this.titulo = 'MyApp';
  }

  cambiarTipo(valor): void {
    this.tipo = valor;
  }
}
