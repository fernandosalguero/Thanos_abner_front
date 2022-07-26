import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { enfoque } from 'src/app/interfaces/enfoque';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EnfoqueService } from 'src/app/services/enfoque.service';



@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['promesas.component.css'],
})


export class PromesasComponent implements OnInit {

  enfoque: enfoque[] = [];

  displayedColumns: string[] = ['Fecha', 'IDdeCaso', 'Grupo', 'Canal', 'ASESOR', 'Metrica', 'Respuesta', 'Satisfaccion', 'NPS', ];
  dataSource: MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private _enfoqueService: EnfoqueService) { }

  ngOnInit(): void {
    this.cargarEnfoque();
  }

  cargarEnfoque(){
    this.enfoque = this._enfoqueService.getEnfoque();
    this.dataSource = new MatTableDataSource(this.enfoque)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
