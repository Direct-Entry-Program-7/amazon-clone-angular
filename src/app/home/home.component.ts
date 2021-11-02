import { Component, OnInit } from '@angular/core';
import {DUMMY_DATA} from "../dummy-data";
import {Item} from "../dto/item";
import {ItemService} from "../service/item.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Array<Item> = [];

  constructor(private itemService: ItemService) {

  }

  ngOnInit(): void {
    this.loadAllItems();
  }

  loadAllItems(){
    this.itemService.getAllItems().subscribe(values=> this.items = values,
      error=> console.error(error));
  }

}

