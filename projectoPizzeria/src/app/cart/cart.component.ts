import { Component, OnInit, Output } from '@angular/core';
import { CartService } from '../cart-item/cart.service';
import { Item } from '../models/item';
import { ItemComponent } from '../item/item.component';
import { Input } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] =[];
    // Ejemplos con los que se puede llenar la lista
    // { id: 1, nombre: 'Pizza 1', detalles: '', precio: 0, cantidad: 1, imgUrl: '' },
    // { id:2, nombre:"Pizza 2", detalles:"", precio:10, cantidad:2, imgUrl:"" },
    // { id:3, nombre:"Pizza 3", detalles:"", precio:15, cantidad:1, imgUrl:"" },
    // { id:4, nombre:"Pizza 4", detalles:"", precio:20, cantidad:1, imgUrl:"" }
  cartTotal = 0;

  
  constructor(private msj: CartService ) { }
  ngOnInit(): void {

    this.msj.recibirDatos().subscribe((item: any) => {
      console.log(item);
      // tslint:disable-next-line: no-unused-expression
      this.addProductToCart(item);
    });
  }

  // tslint:disable-next-line: typedef
  addProductToCart(item: CartItem){
    let productExists = false;
    for(let i in this.cartItems){
      if(this.cartItems[i].nombre === item.nombre){
        this.cartItems[i].cantidad++;
        productExists = true;
        break;
      }
    }

    if (!productExists){
      this.cartItems.push({
        id: item.id,
        nombre: item.nombre,
        detalles: item.detalles,
        precio: item.precio,
        cantidad: 1,
        imgUrl: item.imgUrl,
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach(cartItem => {
      this.cartTotal += (cartItem.cantidad * cartItem.precio);
    });
  }

  
}


