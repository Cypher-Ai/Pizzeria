import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs'
import { Item } from '../models/item';

@Injectable({
    providedIn: 'root'
})

export class CartService{
    subject = new Subject();

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
}