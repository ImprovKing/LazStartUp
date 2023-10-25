import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available

    const currentUser = this.authService.currentUserValue ;
    const isLoggedIn = currentUser && currentUser.access_token ;
    const isApiUrl = req.url.startsWith(environment.apiUrl) ;

    if(isLoggedIn && isApiUrl ){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.access_token}`
      }
        })
      }

      return next.handle(req);

    }
   
}


