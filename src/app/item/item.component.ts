import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";
import {ItemService} from "../service/item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private cartService: CartService,
              private itemService: ItemService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.paramMap.get('code'));
  }

}
