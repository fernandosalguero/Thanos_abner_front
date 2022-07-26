import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material API
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatTooltipModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],

  exports:[
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatTooltipModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],

})
export class AngularMaterialModule { }
