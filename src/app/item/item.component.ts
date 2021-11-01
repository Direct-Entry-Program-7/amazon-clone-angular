import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
