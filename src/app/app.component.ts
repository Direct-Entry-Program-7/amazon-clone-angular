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
    }else{
      this.cartItems.push({code: it.code, qty: inCart});
    }
    console.log(this.cartItems);
  }
}
