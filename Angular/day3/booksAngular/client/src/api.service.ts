import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Book } from './interfaces/book';
import e from 'express';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getall(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/books`)
      .pipe(catchError(this.handleerr));
  }
  createone(data:Book): Observable<any>{
    return this.http.post(`${this.baseUrl}/books`, data)
    .pipe(catchError(this.handleerr))
  }
  handleerr = (err: any): Observable<any> => {
    return throwError(() => err.error);
  };
}
