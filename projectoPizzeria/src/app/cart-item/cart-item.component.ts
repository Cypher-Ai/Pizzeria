import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;

  constructor(private msj: CartService) { 
    // this.cartItem = new CartItem(cartitem.id, cartitem.nombre, cartitem.detalles, cartitem.precio, cartitem.cantidad, cartitem.imgUrl);
  }

  ngOnInit(): void {
  }
  
  quitarCartItem(){

    this.cartItem = new CartItem(this.cartItem.id, this.cartItem.nombre, this.cartItem.detalles, this.cartItem.precio, this.cartItem.cantidad, this.cartItem.imgUrl);
    
    this.msj.enviarDatos_remove(this.cartItem);


  }
  calcularTotal(){
    return this.cartItem.cantidad*this.cartItem.precio;
  }
  

}
