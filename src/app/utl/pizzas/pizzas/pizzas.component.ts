import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  nombre!: string;
  direccion!: string;
  telefono!: string;
  tamanio!: number;
  numPizzas!: number;
  pina!: boolean;
  jamon!: boolean;
  champ!: boolean;
  totalPedido: number = 0;
  totalDinero: number = 0;
  id: number = 0;
  arrayPedidosHoy: any[] = [];
  //arrayp!: { tamanio: string, ingrediente: string, cantidad: number, subtotal: number }[];
  arrayp: any[] = [];
  ordenarPizza(): void {
    console.log(this.nombre);
    console.log(this.direccion);
    console.log(this.telefono);
    console.log(this.tamanio);
    console.log(this.numPizzas);
    console.log("PIÑA", this.pina);
    console.log("JAMON", this.jamon);
    console.log("CHAM", this.champ);
    let ingredienteString = "";
    let ingrediente = 0;
    let tam = "";
    if (this.pina) {
      ingrediente++;
      ingredienteString += "Piña, ";
      console.log("PIÑA", this.pina + " " + ingrediente);
    }
    if (this.jamon) {
      ingrediente++;
      ingredienteString += "Jamon, ";
      console.log("JAMON", this.jamon + " " + ingrediente);
    }
    if (this.champ) {
      ingrediente++;
      ingredienteString += "Champiñones";
      console.log("CHAM", this.champ + " " + ingrediente);
    }
    if (this.tamanio == 40) {
      tam = "Chica";
    } else if (this.tamanio == 80) {
      tam = "Mediana";
    } else {
      tam = "Grande";
    }

    let totalIngrediente = (ingrediente * 10)*this.numPizzas;
    console.log("Ingredientes: " + ingrediente);
    console.log("Total Ingrediente: " + totalIngrediente);
    let subtotal = 0;
    subtotal = this.numPizzas * this.tamanio;
    console.log("Subtotal: " + subtotal);
    let total = 0;
    total = subtotal + totalIngrediente;
    console.log("Total: " + total);
    let array = [];
    let objPizza = {
      id: this.id++,
      tamanio: tam,
      ingrediente: ingredienteString,
      cantidad: this.numPizzas,
      subtotal: total
    }
    array.push(objPizza);
    console.log(array);
    (this.arrayp).push(objPizza);
    console.log(this.arrayp);
    console.log("Total Pedido: " + this.totalPedido);

    this.totalPedido = this.totalPedido + total;
    console.log("Total Pedido 2: " + this.totalPedido);


  }
  eliminarPedido(id: number) {
    console.log("ID: " + id);
    let index = this.arrayp.findIndex(x => x.id === id);
    console.log("Index: " + index);
    this.totalPedido = this.totalPedido - this.arrayp[index].subtotal;
    console.log("Total Pedido 3: " + this.totalPedido);
    this.arrayp.splice(index, 1);
    console.log(this.arrayp);

  }

  
  limpiarCampos() {
    this.nombre = "";
    this.direccion = "";
    this.telefono = "";
    this.tamanio = 0;
    this.numPizzas = 0;
    this.pina = false;
    this.jamon = false;
    this.champ = false;
    this.totalPedido = 0;
    //this.totalDinero = 0;
    this.arrayp = [];
  }


  guardarPedido() {

    Swal.fire({
      title: 'Desea guardar su pedido?',
      text: "El total del pedido es de: $" + this.totalPedido + " MXN",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, guardar pedido!'
    }).then((result) => {
      if (result.isConfirmed) {
        let objPedido = {
          cliente: this.nombre,
          direccion: this.direccion,
          cantidad: this.numPizzas,
          telefono: this.telefono,
          total: this.totalPedido
        }
        this.arrayPedidosHoy.push(objPedido);
        console.log(this.arrayPedidosHoy);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Pedido Guardado',
          showConfirmButton: false,
          timer: 1500
        })
        this.limpiarCampos();
        let totalFinal = 0;
        for (let i = 0; i < this.arrayPedidosHoy.length; i++) {
          totalFinal= totalFinal + this.arrayPedidosHoy[i].total;
          console.log("Total Dinero: " + totalFinal);
        }
        this.totalDinero = totalFinal;
      
      }
    });

  }




}
