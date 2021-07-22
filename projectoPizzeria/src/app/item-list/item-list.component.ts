import { Component, ViewChild} from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item } from '../models/item';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [NgbCarouselConfig]
})

export class ItemListComponent{
  banners= [
    "../../assets/Recurso 1.png",
    "../../assets/Las picositas.jpg",
    "../../assets/La seguna vuelta.jpg"
  ]

  
  items: Item[] = []
  promociones: Item[] =[]
  extras: Item[] = []
  bebidas: Item[] = []
  constructor(private ItemService:ItemService, config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  
  ngOnInit(){
    
    this.items=this.ItemService.getItems();
    this.promociones=this.ItemService.getPromociones();
    this.extras=this.ItemService.getExtras();
    this.bebidas=this.ItemService.getbebidas();
  }

}
