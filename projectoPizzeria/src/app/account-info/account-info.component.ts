import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-item/cart.service';
import { CartComponent } from '../cart/cart.component';
import { HistorialComponent } from '../historial/historial.component';
import { HistorialService } from '../historial/historial.service';

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
  historialItem!: HistorialItem;
  // tslint:disable-next-line: variable-name
  cartItems_h: any[] = [];
  constructor(private msj: CartService, private msj_h: HistorialService, private personaServicio:PersonaServicio) { }

  ngOnInit(): void {
    
    this.usuarioLogeado=this.personaServicio.usuarioLogeado;
    this.msj_h.recibirHistorial().subscribe(
      (item: any) => {
        console.log("Historial recibido con éxito")
        // tslint:disable-next-line: new-parens
        this.historialItem = (this.generarItemHistorial(item));
        
        this.cartItems_h.push(this.historialItem)
        console.log(this.cartItems_h)
      }
    )

  }
  cargarHistorial(){
    
    return this.cartItems_h;
  }

  Refrescar(){
    this.cargarHistorial();
  }
  
  id = 0;
  fecha = "1";
  // tslint:disable-next-line: typedef
  generarItemHistorial(item: any){
    this.id++;
    this.fecha += "/0"
    this.historialItem = new HistorialItem(this.id,item, this.fecha);
    // tslint:disable-next-line: forin
    console.log(this.historialItem)
    console.log("Aquí es donde debería pushear los pedidos")
    console.log("Esto es si es que terminó de pushear con éxito")

    return this.historialItem;
  }
}
