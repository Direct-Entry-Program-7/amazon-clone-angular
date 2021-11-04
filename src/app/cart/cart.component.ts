import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CartService} from "../service/cart.service";
import {ItemService} from "../service/item.service";
import {Item} from "../dto/item";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total: number = 0;
  cartItems!: Array<{item: Item, qty: number}>;

  constructor(private cartService: CartService,
              public itemService: ItemService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadAllCartItems();
    this.calculateNetTotal();
  }

  loadAllCartItems(){
    this.cartItems =  this.cartService.getAllCartItems();
  }

  navigateToItem(code: string) {
    this.router.navigate(['/items', code]);
  }

  calculateNetTotal(): void{
    this.total = this.cartService.getNetTotal();
  }

  checkout(): void {
    this.cartService.placeCart().subscribe(value => {
      alert("Order has been placed");
      this.cartService.clearCart();
      this.router.navigateByUrl('/home');
    }, error => {
      console.log(error);
    })
  }
}
