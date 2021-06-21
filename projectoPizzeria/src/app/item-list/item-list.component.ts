import { Component, Inject} from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item } from '../models/item';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent{

  items: Item[] = []
  promociones: Item[] =[]
  constructor(private ItemService:ItemService) { }

  ngOnInit(){
    this.items=this.ItemService.getItems();
    this.promociones=this.ItemService.getPromociones();
  }

}
