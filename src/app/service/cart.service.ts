import { Injectable } from '@angular/core';
import {Item} from "../dto/item";
import {Subject} from "rxjs";
import {ItemService} from "./item.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Array<{item: Item, qty: number}> = [];
  private totalItems = new Subject<number>();

  constructor() {
  }

  updateCart(it: Item, toCart: number) {

    const item = this.cartItems.find(i => i.item.code === it.code);

    if (item){
      item.qty = toCart;

      if (item.qty === 0){
        this.cartItems.splice(this.cartItems.indexOf(item), 1);
      }
    }else{
      this.cartItems.push({item: it, qty: toCart});
    }
    this.calculateTotalItems();
  }

  private calculateTotalItems(){
    let totalItems = 0;

    this.cartItems.forEach(item => totalItems += item.qty);
    this.totalItems.next(totalItems);
  }

  getTotalItemsInCart(): Subject<number>{
    return this.totalItems;
  }

  getQtyInCart(code: string): number{
    const item = this.cartItems.find(i => i.item.code === code);

    return item? item.qty: 0;
  }

  getAllCartItems(): Array<{item: Item, qty: number}>{
    return this.cartItems;
  }

  removeItemFromCart(code: string): void{
    this.cartItems = this.cartItems.filter(i => i.item.code !== code);
    this.calculateTotalItems();
  }

  getNetTotal(): number{
    let total = 0;

    this.cartItems.forEach(ci => {
      total += ci.item.price * ci.qty;
    })

    return total;
  }
}


