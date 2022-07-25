import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material API
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatDatepickerModule
  ],

  exports:[
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatDatepickerModule
  ],

})
export class AngularMaterialModule { }
