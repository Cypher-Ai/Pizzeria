import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-promocion',
  templateUrl: './item-promocion.component.html',
  styleUrls: ['./item-promocion.component.css']
})
export class ItemPromocionComponent{

  @Input() promocionItem!: Item;
  faShoppingCart=faShoppingCart;
}
