import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-carrito-item',
  templateUrl: './carrito-item.component.html',
  styleUrls: ['./carrito-item.component.css']
})
export class CarritoItemComponent{
  @Input() carritoItem!: Item;
}