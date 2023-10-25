import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../_AUTH/auth/auth.service';
import { Cart, Order, Products, User } from '../DB/entites';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor( private http: HttpClient  ) {
    
    this.ServerUrl = environment.getBackEndUrl();
  }

  ServerUrl: string;


  //Getting all the men API
  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.ServerUrl}/products/`);
  }


  //geting all the other API
  getProductId(id: number): Observable<Products> {
    return this.http.get<Products>(`${this.ServerUrl}/products/${id}`); 
  }

  getProductByCategory(category: string): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.ServerUrl}/products/${category}` );
  }


  handleError(error: HttpErrorResponse) {
    let msg = '';
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


