import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../dto/item";
import {DUMMY_DATA} from "../dummy-data";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  readonly ITEM_SERVICE_API = 'http://localhost:8080/amazon/items';

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Array<Item>>{
    return this.http.get<Array<Item>>(this.ITEM_SERVICE_API);
  }

  getItem(code: string): Observable<Item> {
    return this.http.get<Item>(`${this.ITEM_SERVICE_API}?code=${code}`);
  }
}
