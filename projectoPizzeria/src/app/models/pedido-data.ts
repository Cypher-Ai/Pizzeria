import { Inject } from '@angular/core';
export class PedidoData {
  id: number = 0;
  total: number = 0;
  fecha: string = '';
  hora: string = '';
  ubicacion: string = '';

  constructor(
    @Inject(Number) id: number,
    @Inject(Number) total: number,
    @Inject(String) fecha: string,
    @Inject(String) hora: string,
    @Inject(String) ubicacion: string
  ) {
    this.id = id;
    this.total = total;
    this.fecha = fecha;
    this.hora = hora;
    this.ubicacion = ubicacion;
  }
}
