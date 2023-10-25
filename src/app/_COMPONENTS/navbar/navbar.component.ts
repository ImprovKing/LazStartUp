import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_AUTH/auth/auth.service';
import { User } from 'src/app/DB/entites';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isShown:boolean=false;
  
  currentUser : User ;

  constructor(
    private router : Router,
    private authService : AuthService ,
  ) { 
    this.authService.currentUser.subscribe(x => this.currentUser = x)
  } 
  logout() {
    this.authService.logout() ;
    this.router.navigate(['/auth/login']) ;
}

  ngOnInit(): void {
  }

}
