import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item } from '../models/item';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [NgbCarouselConfig]
})

export class ItemListComponent implements OnInit{
  banners= [
    "../../assets/Recurso 1.png",
    "../../assets/Las picositas.jpg",
    "../../assets/La seguna vuelta.jpg"
  ]
  fixed:string = 'fixed';
  items: Item[] = [];
  promociones: Item[] =[];
  extras: Item[] = [];
  bebidas: Item[] = [];


  constructor(private ItemService:ItemService, config: NgbCarouselConfig, @Inject(DOCUMENT) document:any) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  
  ngOnInit(){
    
    this.items=this.ItemService.getItems();
    this.promociones=this.ItemService.getPromociones();
    this.extras=this.ItemService.getExtras();
    this.bebidas=this.ItemService.getbebidas();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e:Event) {
     if (window.pageYOffset > 740) {
       let element = document.getElementById('header');
       if(element!=null)
        element.classList.add('fixed-top');
        console.log("Sticky")
     } else {
      let element = document.getElementById('header');
      if(element!=null)
          element.classList.remove('fixed-top'); 
          console.log("Stickyn't")
     }
  }  
}
