import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//Conexión con el carrito
import { CartService } from '../cart-item/cart.service';
import { CartItem } from '../models/cart-item';
//Texto de alerta
import Swal from 'sweetalert2';


@Component({
  selector: 'app-item-promocion',
  templateUrl: './item-promocion.component.html',
  styleUrls: ['./item-promocion.component.css']
})
export class ItemPromocionComponent{

  @Input() 
  promocionItem!: Item;
  cartItem!: CartItem;

  faShoppingCart = faShoppingCart;

  Seleccionado: string = 'Seleccione un tipo';
  verSeleccion: string = '';

  indice!: number;
  
  constructor(private msj: CartService){
    
  }
  // tslint:disable-next-line: typedef
  AddToCart(){
    
    if (this.Seleccionado != "Seleccione un tipo") {
      // tslint:disable-next-line: max-line-length
      this.cartItem = new CartItem(this.promocionItem.id, this.promocionItem.nombre + ' - ' + String(this.promocionItem.detallesPrecios[this.indice]), this.promocionItem.detalles, this.promocionItem.precios[this.indice], 1, this.promocionItem.imgUrl);
      this.msj.enviarDatos(this.cartItem);
    } else {
      this.showAlert();
    }
  }
  capturarPrecio(){
    // Enviar el precio del producto
    
      this.verSeleccion = this.Seleccionado;
      this.indice = Number(this.verSeleccion);
      
      return this.indice;
    
  }

  showAlert(){
    Swal.fire({
      title: 'Any fool can use a computer, please select an option',
      
      width: 600,
      padding: '3em',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(215,206,178,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
  }
}
