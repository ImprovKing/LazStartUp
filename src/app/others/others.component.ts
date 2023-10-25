import { Component, OnInit } from '@angular/core';
import { getProducts } from '../DB/DB';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  others = 'others' ;
  Others : any = this.getProductOthersCategory() ;

  getProductOthersCategory ( ){
    return getProducts().filter(
      (Products) => Products.category === this.others
  )
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
