import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products, getProducts } from './DB';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  DB: { id: number; name: string; price: number; SKU: number; category: string; }[];

  constructor( private DBServer : HttpClient ) { 
    this.DB = getProducts() ;
  }

   getProducts() {
    return Products;
}


 getProductsId(id: number) {
    return Products.find(
        (products) => products.id === id
    )
}

getProductsCat(category: string) {
    return Products.find(
        (products) => products.category === category 
    )
}


}
