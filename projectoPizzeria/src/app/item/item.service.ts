import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[]=[
    new Item(0,"Pizza Hawaiana Light","Disfruta del sabor de una pizza paradisíaca hecha a mano, con Salsa de Tomate natural, 100% Queso Mozzarella, Jamón y jugosos trozos de Piña. Simplemente espectacular!",
    [37.5,45.5],["Grande","Familiar"],"https://nuestrasrecetas.es/wp-content/uploads/2015/05/hawaiana.jpg"),
    
    new Item(1,"Pizza Americana","Si amas el Queso y el Jamón no puedes dejar de probar esta Pizza, una exquisita combinación de nuestro delicioso Queso Mozzarella y el mejor Jamón seleccionado.",
    [15.90,33.50,41.50],["Mediana","Grande","Familiar"],"https://www.periodistadigital.com/wp-content/uploads/2020/02/pizza-americana.jpg"),
    
    new Item(2,"Pizza Vegetariana","¡Todos tus vegetales favoritos juntos! Una deliciosa pizza cargada con Pimiento Verde y Cebolla Blanca recién cortada, Champiñones frescos, Aceitunas Negras, Tomates y 100% Queso Mozzarella.",
    [15.90,33.50,41.50],["Mediana","Grande","Familiar"],"https://cdn.buenavibra.es/wp-content/uploads/2020/04/13164937/bigstock-pizza-vegana-receta.jpg"),
    
    new Item(3,"Pizza Peperoni","Irresistible Pizza de Pepperoni, Queso 100% Mozzarella. La Pizza clásica por excelencia.",
    [15.90,33.50,41.50],["Mediana","Grande","Familiar"],"https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/p/e/pepperoni-770px-x-488px_15_1.webp"),
    
    new Item(4,"Pizza Mozarella","Doble porción de Queso Mozzarella sobre nuestra salsa de pizza especial, la expresión más pura de una verdadera pizza.",
    [15.90,33.50,41.50],["Mediana","Grande","Familiar"],"https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/m/o/mozarella-770px-x-488px_1_6.webp"),
        
    new Item(5,"Pizza Continentalle","La combinación perfecta de Jamón, Champiñones y Cebolla sobre nuestro exquisito Queso Mozzarella.",
    [33.50,41.50],["Grande","Familiar"],"https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/c/o/continentalle-770px-x-488px_1_2.webp"),
    
    new Item(6,"Pizza Española","Una espectacular Pizza con Chorizo y los mejores vegetales: Cebolla blanca, Aceitunas Verdes, Aceitunas Negras, Champiñones, Queso Mozzarella y como si fuese poco, Salsa de Ajo en el fondo. ¡Olé!",
    [37.50,45.50],["Grande","Familiar"],"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pedidosya.cl%2Fblog%2Fwp-content%2Fuploads%2Fsites%2F2%2F2018%2F05%2Fpizza-espanola.jpg&f=1&nofb=1"),
    
    new Item(7,"Pizza Hawaiana Chiken BBBQ","Exquisita Pizza Tropical bañada en sabrosa Salsa Barbacoa, combinada con Pollo a la parrilla, Tocino, Cebolla Blanca y jugosos trozos de Piña. ¡Te la recomendamos!",
    [45.50,53],["Grande","Familiar"],"https://i.pinimg.com/originals/24/d0/d1/24d0d1170041a54d790b06108a1039c2.jpg"),
    
    new Item(8,"Pizza Siciliana","¡Las mejores carnes embutidas en una sola Pizza! Hecha para los amantes del Salame, Chorizo, Salchicha Italiana y Pepperoni. Junto a nuestro exiquisito Queso Mozzarella hacen de esta pizza una verdadera delicia.",
    [45.50,53],["Grande","Familiar"],"https://www.vanidades.com/wp-content/uploads/2018/06/Pizza-siciliana-de-kamut.jpg")
  ]

  promociones: Item[]=[
    new Item(0,"Las picositas","Lleva cualquiera de nuestras tres pizzas insignias con un increíble descuento, no te puedes perder de esta oferta para chuparse los dedos!!!!(Solo pizzas familiares)",
    [33.99,30.99,30.99],["Hawaiana Light","Peperoni","Vegetariana"],"../../assets/Las picositas.jpg"),

    new Item(1,"La segunda vuelta","Una coyuntura culinaria sin precedentes se libra en la cocina, depende de ti quien podrá ganar estas elecciones para representar a nuestra Pizza líder, no esperes para emitir tu voto!!!",
    [34.99,34.99],["La Roja Suprema","La Carcelera"],"../../assets/La seguna vuelta.jpg")
  ]

  extras: Item[]=[
    new Item(0, "Pan al ajo","Masa fresca recién horneada, cubierta con nuestra salsa de ajo y sazonados con queso parmesano y especias italianas.",
    [6,10.90],["5 unidades","10 unidades"],"https://www.gourmet.cl/wp-content/uploads/2014/09/pan-de-ajo.jpg"),
    
    new Item(1, "Alitas BBQ","Irresistibles alitas de pollo asadas al horno, servidas con nuestras inigualables salsa BBQ o salsa Búffalo.",
    [12.90,16.90],["6 unidades","9 unidades"],"https://d1uz88p17r663j.cloudfront.net/original/108b152549a95852f9429877134507c4_Alitas-BBQ.jpg"),
    
    new Item(2, "Tequeños","Una deliciosa combinación de nuestra masa fresca, exquisita salsa especial de ajo, 100% mozzarella y jamón fresco.",
    [15.9],["10 unidades"],"https://acomer.pe/wp-content/uploads/2017/01/tequenosperuanosthumb.jpg")
  ]

  bebidas: Item[]=[
    new Item(0, "Coca Cola 500 mL","Coca Cola",
    [2.5],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/c/c/cc-500-oct-770px-x-488px_1.webp"),

    new Item(1, "Coca Cola 1.5 L","Coca Cola",
    [7.5],["1.5 Litros"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/c/o/coca-cola-oct-1.webp"),

    new Item(2, "Inca Kola 500 mL","Inca Kola",
    [2.5],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/i/k/ik-500-oct-770px-x-488px_1.webp"),

    new Item(3, "Inca Kola 1.5 L","Inca Kola",
    [7.5],["1.5 Litros"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/i/k/ik-1_8.webp"),

    new Item(4, "Fanta 500 mL","Fanta",
    [2],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/f/a/fanta-personal-770px-x-488px_1.webp"),

    new Item(5, "Sprite 500 mL","Sprite",
    [2],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/s/p/sprite-personal-770px-x-488px_1_.webp"),

    new Item(6, "San Luis 625 mL","Agua Mineral San Luis",
    [2.5],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/s/l/sl-sin-gas-770px-x-488px_1_.webp"),

    new Item(7, "Coca Cola 500 mL sin Azucar","Coca Cola sin Azucar",
    [2.5],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/c/c/cc-500-770px-x-488px_1_1.webp"),

    new Item(8, "Inca Kola 500 mL sin Azucar","Inca Kola sin Azucar",
    [2.5],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/i/k/ik-500-770px-x-488px_2.webp"),
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
  getbebidas(): Item[]{
    return this.bebidas;
  }
}
