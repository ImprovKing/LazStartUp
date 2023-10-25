import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable , throwError } from 'rxjs';
import { AuthService } from 'src/app/_AUTH/auth/auth.service';
import { Cart, Order, Products} from 'src/app/DB/entites';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  



  constructor(
    private http : HttpClient ,
    private authService : AuthService
  ) { 
    this.ServerUrl = environment.getBackEndUrl();
  }

  ngOnInit(): void {
    console.log(this.getUserOrders())
  }

  ServerUrl: string;

    //Get Cart Items  
    getUserCartItems():Observable<Cart[]>{
      return this.http.get<Cart[]>(`${this.ServerUrl}/cart `) ;
      }
      
      handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error) ;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error) ;
        }
        
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
      }
  
    /////// GET CART ITEMS ////////

    getUserOrders(){
      return this.http.get<Order[]>(`${this.ServerUrl}/orders` );
    }

    //////// ADD TO CART ///////////

    addToCart(Item : Products ):Observable<Products>{
      return this.http.post<Products>(`${this.ServerUrl}/cart/add-to-cart` , Item)  ;
    }

    /////// REMOVE FROM CART /////////

    removeItem(id : string):Observable<Cart>{
      return this.http.delete<Cart>(`${this.ServerUrl}/cart/${id}`) ;
    } 


    /**** PAYAPL BUTTON *****/

    checkout(order : Order){
      this.http.post('/create-order' , order ) ;
    }



}
