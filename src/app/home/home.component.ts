import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from '../_API/-api.service';
import { getProducts } from '../DB/DB';
import AOS from "aos";


interface Product {
   id : number ;
   name : String ;
   price : Number ;
   SKU : Number ;
   category : String 
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products :Observable<any> | undefined ;
  items: Product[];

  shirts  = 'shirts';
  pants = 'pants' ;
  newarrival  = 'newarrivals' ;
  others = 'others' ;

  Shirt : any = this.getProductShirtCategory() ;
  Pants : any = this.getProductPantsCategory() ;
  NewArrivals : any = this.getProductNewarrivalCategory() ;
  Others : any = this.getProductOthersCategory() ;
  
  constructor(private apiService : APIService){}

  ngOnInit(): void { 
    AOS.init();
   }

  getProductShirtCategory ( ){
    return getProducts().filter(
      (Products) => Products.category === this.shirts
  )
  }

  getProductPantsCategory (){
    return getProducts().filter(
      (Products) => Products.category === this.pants
  )
  }

  getProductNewarrivalCategory ( ){
    return getProducts().filter(
      (Products) => Products.category === this.newarrival
  )
  }

  getProductOthersCategory ( ){
    return getProducts().filter(
      (Products) => Products.category === this.others
  )
  }
  

}
