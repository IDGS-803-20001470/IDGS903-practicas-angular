import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { CinepolisModule } from './utl/cinepolis/cinepolis.module';
import { PuntosModule } from './utl/puntos/puntos.module';
import { ResistenciasModule } from './utl/resistencias/resistencias.module';
import { MenuComponent } from './utl/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CinepolisModule,
    PuntosModule,
    ResistenciasModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
