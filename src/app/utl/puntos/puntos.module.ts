import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntosComponent } from './puntos/puntos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PuntosComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports:[
    PuntosComponent
  ]
})
export class PuntosModule { }


