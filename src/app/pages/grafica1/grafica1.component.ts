import { Component, OnInit } from '@angular/core';
import { KPIService } from '../../services/kpi.service';
import { KPIinterface } from '../../interfaces/KPI.interface';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: [ './grafica1.component.css'  ]
})
export class Grafica1Component implements OnInit {

 KPI: KPIinterface[] = []; 

constructor(private kpiService: KPIService){}


  ngOnInit(): void {
    this.kpiService.getKPI().subscribe((KPI) => (this.KPI = KPI))
  }
  
}
