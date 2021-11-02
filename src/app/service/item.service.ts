import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../dto/item";
import {DUMMY_DATA} from "../dummy-data";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Array<Item>>{
    return this.http.get<Array<Item>>('http://localhost:8080/amazon/items');
  }

  getItem(code: string): Item | null {
    const item = DUMMY_DATA.find(item => item.code === code);

    return item? item: null;
  }
}
