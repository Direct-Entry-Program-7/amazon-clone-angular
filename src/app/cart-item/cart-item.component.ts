import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../dto/item";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  item!: Item;

  inCart = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  updateCart(increment: boolean) {
    increment ? this.inCart++ : this.inCart--;
  }
}
