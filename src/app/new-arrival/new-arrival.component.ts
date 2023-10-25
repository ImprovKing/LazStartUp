import { Component, OnInit } from '@angular/core';
import { getProducts } from '../DB/DB';
import { Products } from '../DB/DB'



@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent implements OnInit {
  
  newarrival  = 'newarrivals' ;
  
  NewArrivals : any = this.getProductNewarrivalCategory() ;

  getProductNewarrivalCategory ( ){
    return getProducts().filter(
      (Products) => Products.category === this.newarrival
  )
  }

  constructor() { }

  ngOnInit(): void {
  }

}
