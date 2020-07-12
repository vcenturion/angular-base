import { Component, OnInit } from '@angular/core';
import { ServicetestService} from '../../services/servicetest/servicetest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServicetestService]
})
export class HomeComponent implements OnInit {
  public saveData: string;
  public date;
  public articulos;
  public administrador;

  constructor(
    private serviceTest: ServicetestService
  ) {
    this.date = new Date();
    this.administrador = true;
  }

  ngOnInit(): void {
    console.log('Iniciar peticion');
    this.serviceTest.getArticulos().subscribe(
      result => {
        console.log(result);
        this.articulos = result;
      },
      error => {
        const errorMessage = error as any;
        console.log(errorMessage);
      }
    );
  }

  add(): void {
    this.serviceTest.addData(this.saveData);
    console.log(this.serviceTest.getData());
  }

  cambiar(estado: boolean): void {
    this.administrador = estado;
    console.log(this.administrador);
  }
}
