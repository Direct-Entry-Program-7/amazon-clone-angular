import { Component } from '@angular/core';
import {DUMMY_DATA} from "./dummy-data";
import {Item} from "./dto/item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = DUMMY_DATA;
  cartItems: Array<{code: string, qty: number}> = [];

  updateCart(inCart: number, it: Item) {

    const item = this.cartItems.find(i => i.code === it.code);

    if (item){
      item.qty = inCart;

      if (item.qty === 0){
        this.cartItems.splice(this.cartItems.indexOf(item), 1);
      }
    }else{
      this.cartItems.push({code: it.code, qty: inCart});
    }
  }

  getTotalItemsInCart(): number{
    let totalItems = 0;

    this.cartItems.forEach(item => totalItems += item.qty);
    return totalItems;
  }
}
