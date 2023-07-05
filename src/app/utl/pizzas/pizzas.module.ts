import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PizzasComponent } from './pizzas/pizzas.component';



@NgModule({
  declarations: [
    PizzasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    PizzasComponent
  ]
})
export class PizzasModule { }
