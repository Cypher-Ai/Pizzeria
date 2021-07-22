import { Component, OnInit, Input, Output } from '@angular/core';
import { CartService } from '../cart-item/cart.service';
import { CartItem } from '../models/cart-item';
import { DashboardService } from '../modules/dashboard.service';
import { DatePipe } from '@angular/common';
import { PedidoData } from '../models/pedido-data';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] =[];
  id: number=0;
    // Ejemplos con los que se puede llenar la lista
    // { id: 1, nombre: 'Pizza 1', detalles: '', precio: 0, cantidad: 1, imgUrl: '' },
    // { id:2, nombre:"Pizza 2", detalles:"", precio:10, cantidad:2, imgUrl:"" },
    // { id:3, nombre:"Pizza 3", detalles:"", precio:15, cantidad:1, imgUrl:"" },
    // { id:4, nombre:"Pizza 4", detalles:"", precio:20, cantidad:1, imgUrl:"" }
  @Input() cartTotal = 0;
  
  
  constructor(private msj: CartService, private dashboardService: DashboardService, private datePipe: DatePipe) { }
  ngOnInit(): void {

    
    this.msj.recibirDatos().subscribe(
      (item: any) => {
      // tslint:disable-next-line: no-unused-expression
      this.addProductToCart(item);
      console.log(this.cartItems)
      },
      
    );

    this.msj.recibirDatos_remove().subscribe(
      (item_remove: any) => {
      // tslint:disable-next-line: no-unused-expression
      
      this.removeProductTocart(this.cartItems, item_remove);
      console.log(this.cartItems)
      },
      
    );
  }

  // tslint:disable-next-line: typedef
  addProductToCart(item: CartItem){
    let productExists = false;
    for(let i in this.cartItems){
      if(this.cartItems[i].nombre === item.nombre){
        this.cartItems[i].cantidad+=1;
        productExists = true;
        break;
      }
    }

    if (!productExists){
      this.cartItems.push({
        id: item.id,
        nombre: item.nombre,
        detalles: item.detalles,
        precio: item.precio,
        cantidad: item.cantidad,
        imgUrl: item.imgUrl,
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach(cartItem => {
      this.cartTotal += (cartItem.cantidad * cartItem.precio);
      this.msj.enviarDatos_icono(this.cartTotal);
    });
  }

  removeProductTocart( lista: CartItem[], item: CartItem){
    for(const i in lista){
      if(lista[i].nombre === item.nombre){
        lista.splice(Number(i),1)
        this.cartTotal -= (item.cantidad*item.precio);
        this.msj.enviarDatos_icono(this.cartTotal);
        break;
      }
    }
  }

  enviarLista(){
    if (this.cartItems.length != 0){
      // tslint:disable-next-line: forin
      
      this.msj.enviarDatos_shoppingcart(this.cartItems);
      let fecha=new Date();
      let newFecha=this.datePipe.transform(fecha, 'dd-MM-yyyy');
      let hora=this.datePipe.transform(fecha, 'shortTime');
      if(newFecha != null && hora!=null){
        let pedidoData=new PedidoData(this.id,this.cartTotal,newFecha.toString(),hora.toString(),"Esto tiene que cambiarse");
        this.dashboardService.lstPedidos.push(pedidoData);
        console.log("Mensaje enviado "+pedidoData.total);
      }else{
        console.log("xdn't")
      }       
      
    } else {
      console.log("xd")
    }

  }
}


