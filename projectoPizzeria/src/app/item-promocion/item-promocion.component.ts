import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart-item/cart.service';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-item-promocion',
  templateUrl: './item-promocion.component.html',
  styleUrls: ['./item-promocion.component.css']
})
export class ItemPromocionComponent{

  @Input() promocionItem!: Item;
  cartItem!: CartItem;

  faShoppingCart = faShoppingCart;

  Seleccionado: string = '0';
  verSeleccion: string = '';

  precioExacto!: number;
  
  constructor(private msj: CartService){
    
  }
  // tslint:disable-next-line: typedef
  AddToCart(){
    this.cartItem = new CartItem(this.promocionItem.id, this.promocionItem.nombre + "- S/." + String(this.precioExacto), this.promocionItem.detalles, this.precioExacto, 1, this.promocionItem.imgUrl);
    this.msj.enviarDatos(this.cartItem);
    console.log(this.cartItem.precio);
  }
  capturarPrecio(){
    // Enviar el precio del producto
      this.verSeleccion = this.Seleccionado;
      this.precioExacto = Number(this.verSeleccion);
      console.log(this.precioExacto);
      return this.precioExacto;
  }
}
