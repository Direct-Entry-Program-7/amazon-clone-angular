import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../dto/item";
import {DUMMY_DATA} from "../dummy-data";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getAllItems(): Array<Item>{
    return DUMMY_DATA;
  }

  getItem(code: string): Item | null {
    const item = DUMMY_DATA.find(item => item.code === code);

    return item? item: null;
  }
}
