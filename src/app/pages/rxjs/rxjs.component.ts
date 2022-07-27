import { Component } from '@angular/core';
import { MetricasLiderService } from 'src/app/services/metricas-lider.service';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: [ './rxjs.component.css' ]
})
export class RxjsComponent {
  
  view: [number, number] = [1600, 200];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';

  constructor( private metricasLider: MetricasLiderService) {  }

  get single(){
    return this.metricasLider.MetricasData;
  }

  onSelect(event) {
    // console.log(event);
  }

}
