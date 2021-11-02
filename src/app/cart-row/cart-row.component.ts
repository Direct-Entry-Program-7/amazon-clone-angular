import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Item} from "../dto/item";
import {CartService} from "../service/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.scss']
})
export class CartRowComponent implements OnInit {

  @Input()
  qty!: number;
  @Output()
  onRemove = new EventEmitter<void>();
  @Input()
  item!: Item;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  removeFromCart() {
    this.cartService.removeItemFromCart(this.item.code);
    this.onRemove.emit();
  }


}
