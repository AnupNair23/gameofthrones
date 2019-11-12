import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';

import {
  catchError,
  map,
  tap
} from 'rxjs/operators';

import {
  Observable,
  throwError
} from 'rxjs';

import {
  API_CONFIG
} from '../app/config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  log: any;
  battlesUrl: any;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getLocationData() {
    return this.http.get(API_CONFIG.LOCATIONS).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  searchBattles(params) {
    return this.http.get(API_CONFIG.BATTLES, {params}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }


}
