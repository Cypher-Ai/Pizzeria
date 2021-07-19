import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.css']
})
export class CarritoListComponent{
  carritoitems: Item[] = []
  constructor(private ItemService:ItemService) { }

  ngOnInit(): void {
    this.carritoitems=this.ItemService.getItems();
  }
}
