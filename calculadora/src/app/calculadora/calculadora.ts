import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  valorPantalla = '0';

  presionar(num: string) {
    if (this.valorPantalla == '0') {
      this.valorPantalla = num;
    } else {
      this.valorPantalla += num;
    }
  }

  establecerOperacion(op: string) {
    this.valorPantalla += op;
  }

  calcular() {
    this.valorPantalla = String(eval(this.valorPantalla));
  }

  limpiar() {
    this.valorPantalla = '0';
  }
}
