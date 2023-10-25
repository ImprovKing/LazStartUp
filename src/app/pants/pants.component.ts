import { Component, OnInit } from '@angular/core';
import { getProducts } from '../DB/DB';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

  
  pants = 'pants' ;
  
  Pants : any = this.getProductPantsCategory() ;

  getProductPantsCategory (){
    return getProducts().filter(
      (Products) => Products.category === this.pants
  )
  }

  constructor() { }

  ngOnInit(): void {
  }

}
