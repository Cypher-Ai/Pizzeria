import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart-item/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  cartTotal = 0;
  constructor(private msj: CartService) { }

  ngOnInit(): void {
    this.msj.recibirDatos_icono().subscribe(
      (item: any) => {
      // tslint:disable-next-line: no-unused-expression
      this.cartTotal = Number(item);
      console.log(this.cartTotal)
      },
      
    );
  }

}
