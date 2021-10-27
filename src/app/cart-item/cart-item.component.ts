import {Component, OnInit} from '@angular/core';
import {Item} from "../dto/item";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  item = new Item("I001",
    "https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UL320_.jpg",
    "Apple AirPods with Charging Case",
    3,
    299,
    5);

  inCart = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  updateCart(increment: boolean) {
    increment ? this.inCart++ : this.inCart--;
  }
}
