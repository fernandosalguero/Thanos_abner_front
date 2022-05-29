import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {KPIinterface } from '../interfaces/KPI.interface';

@Injectable({
  providedIn: 'root'
})

export class KPIService {

private apiURL = 'http://localhost:3001/posts';

  constructor( private http: HttpClient) { }

getKPI(): Observable<KPIinterface[]>{
  return this.http.get<KPIinterface[]>(this.apiURL)
}
}
