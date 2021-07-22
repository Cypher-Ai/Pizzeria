import { Item } from './models/item';

export class Pedido {
  constructor(
    public numeroDePedido: number,
    public listaCarritoCompra: Item[] = [],
    public fechaPedido: string,
    public horaPedido: string,
    public ubicacion:string
  ) {}
  getTotal(){
    let total:number=0;
    this.listaCarritoCompra.forEach(Item => {
      
    });
  }
}
