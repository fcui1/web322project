import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Position } from './position'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor( private http : HttpClient ) { }

  public getPositions() : Observable<Position[]>{
    return this.http.get<Position[]>("https://afternoon-refuge-46215.herokuapp.com/positions");
  }
}