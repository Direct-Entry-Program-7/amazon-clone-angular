import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../dto/item";
import {DUMMY_DATA} from "../dummy-data";

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.scss']
})
export class CartRowComponent implements OnInit {

  @Input()
  item!: Item;
  @Input()
  qty!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
