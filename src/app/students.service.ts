import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:5000/servicio';


  getAll() {
    return this.http
      .get<any[]>(this.baseUrl)
      .pipe(map(data => data));
  }


}

export interface Students {
  /*_id: string;
  prod_name: string;
  prod_desc: string;
  prod_price: number;
  updated_at: Date;*/

  ID: string;
  active: boolean;
  grades: number;
  Name: string;
  Gender: string;
  Class: string;
  Club: string;
  Persona: string;
  Crush: string;
  BreastSize: string;
  Strength: string;
  Hairstyle: string;
  Color: string;
  Stockings: string;
  Accessory: string;
  ScheduleTime: string;
  ScheduleDestination: string;
  ScheduleAction: string;
}
