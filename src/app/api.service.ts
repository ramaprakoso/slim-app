import { Injectable } from '@angular/core';
import { Region } from '../model/region'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  url = "http://localhost:12306/region"; 

  constructor(private http:HttpClient) { }

  getRegion(): Observable<any>{
    return this.http.get<any>(this.url).
    pipe(
      tap(data=> console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError) 
    );
  }

  // getUsers(): Observable<any> {
  //   return Observable.create(observer => {
  //       this.http.get(this.url).map(res => data.json();
  //   })
  // }

  private handleError(err: HttpErrorResponse) {
 
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

        errorMessage = `An error occurred: ${err.error.message}`;
    } else {

        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}

//   getHeroes (): Observable<Hero[]> {
//     return this.http.get<Hero[]>(this.heroesUrl)
//       .pipe(
//         tap(_ => this.log('fetched heroes')),
//         catchError(this.handleError<Hero[]>('getHeroes', []))
//       );
//   }

//   this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
//     this.totalAngularPackages = data.total;
// })
}
