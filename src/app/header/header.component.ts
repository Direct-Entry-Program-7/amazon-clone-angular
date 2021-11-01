import {Component, Inject, Input, OnInit} from '@angular/core';
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalItemsInCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  updateCart() {
    console.log("Updating Cart...!")
    this.totalItemsInCart = this.cartService.getTotalItemsInCart();
  }
}
