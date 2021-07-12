import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;

  constructor() { 
    // this.cartItem = new CartItem(cartitem.id, cartitem.nombre, cartitem.detalles, cartitem.precio, cartitem.cantidad, cartitem.imgUrl);
  }

  ngOnInit(): void {
  }

}
