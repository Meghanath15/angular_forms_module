import { Injectable } from '@angular/core';
import { AllProducts } from '../MainPosts/type/product.type';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private items: AllProducts[]=[];

  constructor() { }

  getItems():AllProducts[]{
    return [...this.items];
  }
  addItem(item:AllProducts){
    this.items.push(item);
  }

  removeItem(item:AllProducts){
    console.log(this.items)
  }
}
