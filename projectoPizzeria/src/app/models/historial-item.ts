import {Inject} from '@angular/core';
import { CartItem } from './cart-item';

export class HistorialItem {
    id: number = 0;
    itemsH!:CartItem[];
    fecha: string = "";
    
    
    constructor(@Inject(Number) id:number, @Inject(String) itemsH:CartItem[], @Inject(String) fecha:string) {
    this.id=id;
    this.itemsH=itemsH;
    this.fecha=fecha;
    }
}