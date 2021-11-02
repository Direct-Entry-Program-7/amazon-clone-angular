import { Injectable } from '@angular/core';
import {Item} from "../dto/item";
import {Subject} from "rxjs";
import {ItemService} from "./item.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Array<{code: string, qty: number}> = [];
  private totalItems = new Subject<number>();

  constructor(private itemService: ItemService) {
  }

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
    const item = this.cartItems.find(i => i.code === code);

    return item? item.qty: 0;
  }

  getAllCartItems(): Array<{code: string, qty: number}>{
    return this.cartItems;
  }

  removeItemFromCart(code: string): void{
    this.cartItems = this.cartItems.filter(item => item.code !== code);
    this.calculateTotalItems();
  }

  getNetTotal(): number{
    let total = 0;

    this.cartItems.forEach(item => {
      //total += this.itemService.getItem(item.code)!.price * item.qty;
    })

    return total;
  }
}


