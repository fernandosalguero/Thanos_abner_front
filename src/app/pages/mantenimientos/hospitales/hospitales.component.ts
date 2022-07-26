import { Component, OnInit } from '@angular/core';

import { KPIinterface } from 'src/app/interfaces/KPI.interface';
import { KPIService } from 'src/app/services/kpi.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  KPI: KPIinterface[] = []; 

constructor(private kpiService: KPIService){}

  ngOnInit(): void {
    this.kpiService.getKPI().subscribe((KPI) => (this.KPI = KPI))
  }
}
 