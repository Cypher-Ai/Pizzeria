import {Inject} from '@angular/core';
export class CartItem {
    id:number=0;
    nombre:string="";
    detalles:string="";
    cantidad!: number;
    precio!: number;
    imgUrl:string="";
    
    constructor(@Inject(Number) id:number, @Inject(String) nombre:string, @Inject(String) detalles:string,
        @Inject(Number) precio:number, @Inject(Number) cantidad:number, @Inject(Number) imgUrl:string) {
    this.id=id;
    this.nombre=nombre;
    this.detalles=detalles;
    this.precio=precio;
    this.cantidad=cantidad;
    this.imgUrl=imgUrl;
    }
}