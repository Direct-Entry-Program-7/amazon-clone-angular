import { Component, OnInit } from '@angular/core';
import {DUMMY_DATA} from "../dummy-data";
import {Item} from "../dto/item";
import {ItemService} from "../service/item.service";
import {delay} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Array<Item> = [];

  constructor(private itemService: ItemService,
              private toastrService: ToastrService) {

  }

  ngOnInit(): void {
    this.loadAllItems();
  }

  loadAllItems(){
    this.itemService.getAllItems().subscribe(values=> {this.items = values; console.log(this.items)},
      error=> {
        console.error(error);
        this.toastrService.error(error.message, "Failed to fetch data", {positionClass: 'toast-center-center'});
      });
  }

}

