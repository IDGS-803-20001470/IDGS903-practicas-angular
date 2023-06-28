import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {

  respuesta: any = null;

  banda1: any = '';
  banda2: any = '';
  banda3: any = '';
  banda4: any = '';
  colores = [
    { name: 'Negro', value: 0, color: '#000000' },
    { name: 'Marrón', value: 1, color: '#843c0b' },
    { name: 'Rojo', value: 2, color: '#fe0000' },
    { name: 'Naranja', value: 3, color: '#ef7f1a' },
    { name: 'Amarillo', value: 4, color: '#ffed00' },
    { name: 'Verde', value: 5, color: '#009900' },
    { name: 'Azul', value: 6, color: '#006fc0' },
    { name: 'Violeta', value: 7, color: '#994779' },
    { name: 'Gris', value: 8, color: '#585858' },
    { name: 'Blanco', value: 9, color: '#fefefe' },
  ];

  tolerancias = [
    { name: 'Oro', value: 1, color: '#EABE3F' },
    { name: 'Plata', value: 2, color: '#b3b3b3' },
  ]




  calcularResistencia() {
   
    const ban1 = this.colores.find(color => color.value === parseInt(this.banda1));
    const ban2 = this.colores.find(color => color.value === parseInt(this.banda2));
    const ban3 = this.colores.find(color => color.value === parseInt(this.banda3));
    const ban4 = this.tolerancias.find(tolerancia => tolerancia.value === parseInt(this.banda4));


    this.respuesta = null;
    let tolerancia = (this.banda4 == 1) ? 0.05 : 0.10;

    let suma = this.banda1 + this.banda2;
    let mult = this.banda3;
    let valor = suma * Math.pow(10 , mult); 

    this.respuesta = {
      ban1, ban2, ban3,ban4,
      val: valor,
      min: valor - (valor * tolerancia),
      max: valor + (valor * tolerancia)
    }

  }

}
