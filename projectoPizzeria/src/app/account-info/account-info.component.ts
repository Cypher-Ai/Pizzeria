import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-item/cart.service';
import { HistorialItem } from '../models/historial-item';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  cartItems_h: HistorialItem[] = [];
  historialItem!: HistorialItem;
  constructor(private msj: CartService) { }

  ngOnInit(): void {
    this.msj.recibirDatos_shoppingcart().subscribe(
      (item: any) => {
        console.log(item)
        this.generarItemHistorial(item);
      },
      
    );
  }
  
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
    console.log(this.cartItems_h[0].itemsH[0].nombre)
  }

}
