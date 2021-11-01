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
}
