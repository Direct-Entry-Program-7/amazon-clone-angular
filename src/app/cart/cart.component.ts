import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";
import {ItemService} from "../service/item.service";
import {Item} from "../dto/item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems!: Array<{code: string, qty: number}>;

  constructor(private cartService: CartService,
              public itemService: ItemService) { }

  ngOnInit(): void {
    this.loadAllCartItems();
  }

  loadAllCartItems(){
    this.cartItems =  this.cartService.getAllCartItems();
  }

  getItem(code: string): Item {
    return this.itemService.getItem(code) as Item;
  }
}
