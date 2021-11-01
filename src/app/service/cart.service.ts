import { Injectable } from '@angular/core';
import {Item} from "../dto/item";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Array<{code: string, qty: number}> = [];
  totalItems = new Subject<number>();

  constructor() { }

  updateCart(it: Item, toCart: number) {

    const item = this.cartItems.find(i => i.code === it.code);

    if (item){
      item.qty = toCart;

      if (item.qty === 0){
        this.cartItems.splice(this.cartItems.indexOf(item), 1);
      }
    }else{
      this.cartItems.push({code: it.code, qty: toCart});
    }
  }

  getTotalItemsInCart(): Subject<number>{
    return this.totalItems;
    // let totalItems = 0;
    //
    // this.cartItems.forEach(item => totalItems += item.qty);
    // return totalItems;
  }
}


