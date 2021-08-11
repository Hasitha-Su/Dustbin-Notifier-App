import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Dustbin, IDustbin } from './dustbin';

@Injectable({
  providedIn: 'root'
})
export class Dustbinervice {

  private _url = "https://dustbin-service.herokuapp.com/dustbin/";

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  //Get All Dustbins
  getAllDustbins(): Observable<IDustbin[]> {
    return this.http.get<IDustbin[]>(`${this._url}`);
  }

  //Delete Dustbin
  deleteDustbin(id: string): Observable<IDustbin> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    const url = `${this._url}${id}`;
    return this.http.delete<IDustbin>(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateDustbin(dustbin: IDustbin): Observable<IDustbin> {

    const url = `${this._url}${dustbin._id}`;

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    return this.http.put<IDustbin>(url, dustbin, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  //add dustbin
  addDustbin(dustbin: Dustbin): Observable<IDustbin> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post<IDustbin>(this._url, dustbin, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}