import {Injectable} from '@angular/core';
import {Item} from "../dto/item";
import {Observable, Subject} from "rxjs";
import {ItemService} from "./item.service";
import {OrderDetail} from "../dto/order-detail";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly ORDER_SERVICE_API = 'http://localhost:8080/amazon/orders';

  private cartItems: Array<{ item: Item, qty: number }> = [];
  private totalItems = new Subject<number>();

  constructor(private http: HttpClient) {
  }

  updateCart(it: Item, toCart: number) {

    const item = this.cartItems.find(i => i.item.code === it.code);

    if (item) {
      item.qty = toCart;

      if (item.qty === 0) {
        this.cartItems.splice(this.cartItems.indexOf(item), 1);
      }
    } else {
      this.cartItems.push({item: it, qty: toCart});
    }
    this.calculateTotalItems();
  }

  getTotalItemsInCart(): Subject<number> {
    return this.totalItems;
  }

  getQtyInCart(code: string): number {
    const item = this.cartItems.find(i => i.item.code === code);

    return item ? item.qty : 0;
  }

  getAllCartItems(): Array<{ item: Item, qty: number }> {
    return this.cartItems;
  }

  removeItemFromCart(code: string): void {
    this.cartItems = this.cartItems.filter(i => i.item.code !== code);
    this.calculateTotalItems();
  }

  getNetTotal(): number {
    let total = 0;

    this.cartItems.forEach(ci => {
      total += ci.item.price * ci.qty;
    })

    return total;
  }

  placeCart(orderDetails: Array<OrderDetail>): Observable<void> {
    return this.http.post<void>(this.ORDER_SERVICE_API, orderDetails);
  }

  private calculateTotalItems() {
    let totalItems = 0;

    this.cartItems.forEach(item => totalItems += item.qty);
    this.totalItems.next(totalItems);
  }
}


