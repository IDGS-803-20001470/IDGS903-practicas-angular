import { RouterModule, Routes, } from "@angular/router";
import { NgModule } from "@angular/core";


import { ResistenciasComponent } from "./utl/resistencias/resistencias/resistencias.component";
import { CinepolisComponent } from "./utl/cinepolis/cinepolis-components/cinepolis.component";
import { PuntosComponent } from "./utl/puntos/puntos/puntos.component";
import { PizzasComponent } from "./utl/pizzas/pizzas/pizzas.component";

const routes: Routes = [
    {
        path: 'Cinepolis', component: CinepolisComponent
    },
    { path: 'Resistencias', component: ResistenciasComponent },
    { path: 'Puntos', component: PuntosComponent },
    { path: 'Pizzas', component: PizzasComponent },
   // {path: '**', component: PagenotFoundComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }