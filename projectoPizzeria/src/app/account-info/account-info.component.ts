import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-item/cart.service';

import { HistorialItem } from '../models/historial-item';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  usuarioLogeado!: Persona;

  HistorialItems: any[] = this.cargarHistorial();
  constructor(private msj: CartService, private personaServicio:PersonaServicio) { }

  ngOnInit(): void {
    
    this.usuarioLogeado=this.personaServicio.usuarioLogeado;

  }
  cargarHistorial(){
    console.log("Historial cargado con éxito")
    /*this.msg.recibirHistorial2().subscribe(
      (item: any)=>{

        this.HistorialItems = item;

        console.log("El historial fue recibido con éxito")

        console.log(item)
      }
    )*/
    console.log(this.HistorialItems)
    return this.HistorialItems;
  }
  Refrescar(){
    this.cargarHistorial();
  }
  cartItems_h: any[] = [];
  historialItem!: HistorialItem;

    /*this.msj.recibirDatos_shoppingcart().subscribe(
      (item: any) => {
        console.log(item)
        this.generarItemHistorial(item);
      },
      
    );*/
  
  
  id = 0;
  fecha = "1";
  // tslint:disable-next-line: typedef
  generarItemHistorial(item: any){
    this.id++;
    this.fecha += "/0"
    this.historialItem = new HistorialItem(this.id,[], this.fecha);
    // tslint:disable-next-line: forin
    for(let i in item){
      this.historialItem.itemsH.push(item[i]);
    }
    this.cartItems_h.push(this.historialItem);
    
  }

  enviarHistorial(){
    console.log("Ahora sí envía el historial")
    //this.msg.enviarHistorial2(this.cartItems_h);
    console.log(this.historialItem)
  }
}
