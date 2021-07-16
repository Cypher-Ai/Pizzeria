import { Component, Input} from '@angular/core';
import { Item } from '../models/item';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart-item/cart.service';
import { CartItem } from '../models/cart-item';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent{
  @Input()
  productItem!: Item;
  cartItem!: CartItem;

  faShoppingCart = faShoppingCart;

  Seleccionado: string = '0';
  verSeleccion: string = '';

  indice!: number;


  constructor(private msj: CartService){

  }

  // tslint:disable-next-line: typedef
  AddToCart(){
    // Enviar el producto
    // tslint:disable-next-line: max-line-length
    this.cartItem = new CartItem(this.productItem.id, this.productItem.nombre + " - " + String(this.productItem.detallesPrecios[this.indice]), this.productItem.detalles, this.productItem.precios[this.indice], 1, this.productItem.imgUrl);
    this.msj.enviarDatos(this.cartItem);
    console.log(this.cartItem.precio);
  }
  // tslint:disable-next-line: typedef
  capturarPrecio(){
// Enviar el precio del producto
  this.verSeleccion = this.Seleccionado;
  this.indice = Number(this.verSeleccion);
  console.log(this.indice);
  return this.indice;
  }
}


