import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[]=[
    new Item(0,"Pizza Hawaiana","Deliciosa Pizza con Piña",[16.00,32.00],["Mediana","Familiar"],"https://nuestrasrecetas.es/wp-content/uploads/2015/05/hawaiana.jpg"),
    new Item(1,"Pizza Americana","Deliciosa Pizza con America",[14.00,30.00],["Mediana","Familiar"],"https://www.periodistadigital.com/wp-content/uploads/2020/02/pizza-americana.jpg"),
    new Item(2,"Pizza Vegetariana","Safo papi (Aunque en la foto se ve riquísima, no te lo negaré",[69.00,420.00],["Mediana","Familiar"],"https://cdn.buenavibra.es/wp-content/uploads/2020/04/13164937/bigstock-pizza-vegana-receta.jpg"),
    new Item(3,"Pizza Salami","Pizza con Salami :pog:",[14.00,30.00],["Mediana","Familiar"],"https://beta.da-antonio.be/wp-content/uploads/2018/11/salami.jpeg"),
  ]

  constructor() { }

  getItems(): Item[]{
    return this.items;
  }
}
