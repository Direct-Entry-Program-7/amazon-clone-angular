import { Component, OnInit } from '@angular/core';
import {DUMMY_DATA} from "../dummy-data";
import {Item} from "../dto/item";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
