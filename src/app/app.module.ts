import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import {FormsModule} from "@angular/forms";
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'items',
    component: ItemComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartItemComponent,
    ItemComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
