import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'


@Injectable({
    providedIn: 'root'
})

export class CartService{
    subject = new Subject();
    subject_remove = new Subject();

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

    enviarDatos_remove(item_remove: unknown){
        // console.log(item)
        this.subject_remove.next(item_remove)
    }
    // tslint:disable-next-line: typedef
    recibirDatos_remove(){
        return this.subject_remove.asObservable();
    }
}