import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";
import {ItemService} from "../service/item.service";
import {Item} from "../dto/item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems!: Array<{code: string, qty: number}>;

  constructor(private cartService: CartService,
              public itemService: ItemService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadAllCartItems();
  }

  loadAllCartItems(){
    this.cartItems =  this.cartService.getAllCartItems();
  }

  getItem(code: string): Item {
    return this.itemService.getItem(code) as Item;
  }

  navigateToItem(code: string) {
    this.router.navigate(['/items', code]);
  }
}
