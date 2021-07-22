import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'


@Injectable({
    providedIn: 'root'
})

export class CartService{
    subject = new Subject();
    subject_remove = new Subject();
    subject_icono = new Subject();
    subject_shoppingcart = new Subject();
    subject_Eliminarlista = new Subject();

    subject_signal = new Subject();

    constructor(){}

    // tslint:disable-next-line: typedef
    enviarDatos(item: unknown){
        // console.log(item)
        this.subject.next(item)
    }
    // tslint:disable-next-line: typedef
    recibirDatos(){
        return this.subject.asObservable();
    }
    
    enviarDatos_Eliminarlista(){
        // console.log(item)
        this.subject_Eliminarlista.next()
    }
    recibirDatos_Eliminarlista(){
        return this.subject_Eliminarlista.asObservable();
    }

    enviarDatos_remove(item_remove: unknown){
        // console.log(item)
        this.subject_remove.next(item_remove)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_remove(){
        return this.subject_remove.asObservable();
    }

    enviarDatos_icono(item_icono: unknown){
        // console.log(item)
        this.subject_icono.next(item_icono)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_icono(){
        return this.subject_icono.asObservable();
    }
    
    enviarDatos_shoppingcart(item_icono: unknown){
        // console.log(item)
        this.subject_shoppingcart.next(item_icono)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_shoppingcart(){
        return this.subject_shoppingcart.asObservable();
    }

    sendSignal(){
        // console.log(item)
        this.subject_signal.next()
    }
    // tslint:disable-next-line: typedef
    receiveSignal(){
        return this.subject_signal.asObservable();
    }
}