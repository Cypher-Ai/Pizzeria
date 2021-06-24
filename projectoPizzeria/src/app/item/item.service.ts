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

  promociones: Item[]=[
    new Item(0,"Las picositas","Lleva cualquiera de las 3 Pizzas favoritas por el público con pan al ajo gratis con un descuento (Solo pizzas familiares)",
    [30.00,28.00,30.00],["Hawaiana Light","Peperoni","Vegetariana"],"../../assets/Las picositas.jpg"),
    new Item(1,"La segunda vuelta","Para celebrar la segunda vuelta, llevate una pizza insignia de tu candidato favorito!!!1, no dejes pasar esta promoción (valido hasta que expropien la pizzería)",
    [35.00,35.00],["La Roja Suprema","La Carcelera"],"../../assets/La seguna vuelta.jpg"),
  ]

  extras: Item[]=[
    new Item(0, "Pan al ajo","Rico pan al ajo JA",[6],["5 unidades"],"https://www.gourmet.cl/wp-content/uploads/2014/09/pan-de-ajo.jpg"),
    new Item(1, "Six pack","Coca cola de toda la vida",[6],["3 Litros"], "https://static.ulabox.com/media/102754_fb2.jpg")
  ]
  constructor() { }

  getItems(): Item[]{
    return this.items;
  }
  getPromociones(): Item[]{
    return this.promociones;
  }
  getExtras(): Item[]{
    return this.extras;
  }
}
