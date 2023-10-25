import { Component, OnInit } from '@angular/core';
import { getProducts } from '../DB/DB';


@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

  shirts  = 'shirts';

  Shirt : any = this.getProductShirtCategory() ;

  getProductShirtCategory ( ){
    return getProducts().filter(
      (Products) => Products.category === this.shirts
  )
  }

  constructor() { }

  ngOnInit(): void {
  }

}
