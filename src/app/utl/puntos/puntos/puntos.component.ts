import { Component } from '@angular/core';

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent {
  x1!:number;
  y1!:number;
  x2!:number;
  y2!:number;
  distancia!:number;
  calcularDistancia():void{
  let distanciaX = this.x2 - this.x1;
  let distanciaY = this.y2 - this.y1;
  let distanciaCuadrada = distanciaX ** 2 + distanciaY ** 2;
  this.distancia = Math.sqrt(distanciaCuadrada);


}
}
