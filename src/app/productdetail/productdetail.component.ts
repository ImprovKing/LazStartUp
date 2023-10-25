import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../DB/DB';
import { getProducts , getProductsId} from '../DB/DB';
import AOS from "aos";


interface Product{
  id: number ; name: string; price: number; SKU: number; category: string; image1: string;
}

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  
  productID: number ;
  Products : Product | undefined ;
  others = 'others' ;

  Others : any = this.getProductOthersCategory() ;
  //dimensions 
  
  constructor(
    private route : ActivatedRoute ,
    ) { }

  ngOnInit(): void {
    this.Products = this.getProduct()
    console.log(this.getProduct())
 
  }

  getProduct(): any {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const productdetail = this.getProductsId(id) ;
    return productdetail ;
  }

  getProductsId(id: number) {
    return Products.find(
        (Products) => Products.id === id
    )
}


  getProductOthersCategory ( ){
    return getProducts().filter(
      (Products) => Products.category === this.others
  )
  }

}
