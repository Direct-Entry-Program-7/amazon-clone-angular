import { Component, OnInit } from '@angular/core';
import {Item} from "../dto/item";
import {DUMMY_DATA} from "../dummy-data";

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.scss']
})
export class CartRowComponent implements OnInit {

  item: Item = DUMMY_DATA[0];

  constructor() { }

  ngOnInit(): void {
  }

}
