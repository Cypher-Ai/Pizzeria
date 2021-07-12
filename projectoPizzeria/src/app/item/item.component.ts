import { Component, Input} from '@angular/core';
import { Item } from '../models/item';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart-item/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent{
  @Input()
  productItem!: Item;
  faShoppingCart=faShoppingCart;

  constructor(private msj: CartService){
    
  }
  // tslint:disable-next-line: typedef
  AddToCart(){
    this.msj.enviarDatos(this.productItem)
  }

}
