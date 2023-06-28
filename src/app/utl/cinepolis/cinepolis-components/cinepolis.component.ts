import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre!:string;
  cantCompradores!:number;
  tarjeta:string = 'No';
  cantBoletos!:number;
  resultado!:number;
  subtotal!:number;
  descuento!:number;
  mensaje!:string;
  total!:number;


  calcularPago():void{

    let resultadosub = 0;
    let resultadoT=0;
    let desc=0;
    let max=0;
    max=this.cantCompradores*7;
    let mult=0;
    
    console.log("Cant compradores:",this.cantCompradores,"Cant boletos:",this.cantBoletos, "maximo: ",max);
    if(this.cantBoletos>max){
      alert("No se puede comprar mas de 7 boletos por persona");
      return;
    }
    
   
    console.log("Cant boletos:",this.cantBoletos);
    this.subtotal = this.cantBoletos * 12;
    console.log("Subtotal:",this.subtotal);
    if(this.cantBoletos>5){
      resultadosub= this.subtotal * 0.15;
      this.resultado = this.subtotal - resultadosub;
    }else if( this.cantBoletos>=3 && this.cantBoletos<=5){
      resultadosub = this.subtotal * 0.10;
      this.resultado = this.subtotal - resultadosub; 
    }else{
      this.resultado = this.subtotal;
    }
    

    console.log("Resultado:",this.resultado);
    console.log("Resultado sub:",resultadosub);
    console.log("Tarjeta:",this.tarjeta);
    if(this.tarjeta === 'si'){
      console.log("Tarjeta si:",this.tarjeta);
      desc= this.resultado * 0.10;
      this.total = this.resultado - desc; 
    }else{
      console.log("Tarjeta no:",this.tarjeta);
      this.total = this.resultado;
    }
    this.mensaje = "Cliente: "+this.nombre+" Tarjeta: "+this.tarjeta+" Cant boletos: "+this.cantBoletos+" Cant compradores: "+this.cantCompradores+" Subtotal: "+this.subtotal+ " Total: "+this.total;
    console.log("Total:",this.total);

  }



}
