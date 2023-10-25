import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { User } from 'src/app/DB/entites';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type' : 'application/json'}) 
} ;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http : HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('access_token')));
    this.currentUser = this.currentUserSubject.asObservable();

    this.ServerUrl = environment.getBackEndUrl();
   }

   ServerUrl: string;

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

login(username: string, password: string) {
    return this.http.post<any>(`${this.ServerUrl}/login`, { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('access_token', JSON.stringify(user));
            this.currentUserSubject.next(user);
             return user;
        }));
}



  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.ServerUrl}/user/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

getToken() {
  return localStorage.getItem('access_token') ;
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('access_token');
    localStorage.clear() ;
}

    // Error
    handleError(error: HttpErrorResponse) {
      let msg = 'error';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        msg = error.error.message;
      } else {
        // server-side error
        msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(msg);
    }


}