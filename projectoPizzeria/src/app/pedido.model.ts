import { Item } from './models/item';

export class Pedido {
  constructor(
    public numeroDePedido: number,
    public listaCarritoCompra: Item[] = [],
    public fechaPedido: string,
    public horaPedido: string
  ) {}
}
