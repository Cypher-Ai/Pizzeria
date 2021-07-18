import { Inject } from '@angular/core';
export class Item {
  id: number = 0;
  nombre: string = '';
  detalles: string = '';
  precios!: number[];
  detallesPrecios!: string[];
  imgUrl: string = '';

  constructor(
    @Inject(Number) id: number,
    @Inject(String) nombre: string,
    @Inject(String) detalles: string,
    @Inject(Number) precios: number[],
    @Inject(String) detallesPrecios: string[],
    @Inject(Number) imgUrl: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.detalles = detalles;
    this.precios = precios;
    this.detallesPrecios = detallesPrecios;
    this.imgUrl = imgUrl;
  }
}
