import { Injectable } from '@angular/core';

interface Metricas {
  name: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class MetricasLiderService {

  private data: Metricas[] = [
    {
      "name": "Representantes",
      "value": "19"
    },
    {
      "name": "NPS",
      "value": "67.38 %"
    },
    {
      "name": "Satisfaccion",
      "value": "96.79 %"
    },
    {
      "name": "Casos por hora",
      "value": "16.3 %"
    },
    {
      "name": "Insatisfaccion",
      "value": "1.71 %"
    },
    {
      "name": "Utilizacion",
      "value": "94.75 %"
    },
    {
      "name": "Deslogueo Real",
      "value": "9.16 %"
    },
    {
      "name": "Deslogueo",
      "value": "5.85 %"
    },
    {
      "name": "Ausentismo Real",
      "value": "94.75 %"
    },
    {
      "name": "Ausentismo ",
      "value": "0.32 %"
    },
    
  ]

  get MetricasData () {
    return this.data;
  }

}
