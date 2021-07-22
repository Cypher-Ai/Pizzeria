import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'


@Injectable({
    providedIn: 'root'
})

export class HistorialService{
    subject = new Subject();
    subject_signal = new Subject();

    constructor(){}
    // tslint:disable-next-line: typedef
    sendSignal(){
        // console.log(item)
        this.subject_signal.next()
    }
    // tslint:disable-next-line: typedef
    receiveSignal(){
        return this.subject_signal.asObservable();
    }

    // tslint:disable-next-line: typedef
    enviarHistorial(item: unknown){
        // console.log(item)
        this.subject.next(item)
    }
    // tslint:disable-next-line: typedef
    recibirHistorial(){
        return this.subject.asObservable();
    }
    

}