import { Component, OnInit, Input, Output } from '@angular/core';
import { CartService } from '../cart-item/cart.service';
import { CartItem } from '../models/cart-item';
import { DashboardService } from '../modules/dashboard.service';
import { DatePipe } from '@angular/common';
import { PedidoData } from '../models/pedido-data';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.service';
import Swal from 'sweetalert2';

import { HistorialService } from '../historial/historial.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] =[];
  cartItems_historial: any[]=[] ;

  id: number=0;
    // Ejemplos con los que se puede llenar la lista
    // { id: 1, nombre: 'Pizza 1', detalles: '', precio: 0, cantidad: 1, imgUrl: '' },
    // { id:2, nombre:"Pizza 2", detalles:"", precio:10, cantidad:2, imgUrl:"" },
    // { id:3, nombre:"Pizza 3", detalles:"", precio:15, cantidad:1, imgUrl:"" },
    // { id:4, nombre:"Pizza 4", detalles:"", precio:20, cantidad:1, imgUrl:"" }
  cartTotal = 0;
  usuarioLogeado!: Persona;
  logged!:boolean;
  
  constructor(private msj: CartService,
              private dashboardService: DashboardService,
              private datePipe: DatePipe,
              private personaServicio: PersonaServicio,
              private msj_h: HistorialService
      ) { }
  ngOnInit(): void {
    this.usuarioLogeado=this.personaServicio.usuarioLogeado;
    this.logged=this.personaServicio.logged;

    this.msj.receiveSignal().subscribe(
      () => {
        this.logged=this.personaServicio.logged;
      // tslint:disable-next-line: no-unused-expression
      this.enviarIconoCartTotal();
      this.reiniciarValores();
      },
    );

    this.msj.recibirDatos().subscribe(
      (item: any) => {
      // tslint:disable-next-line: no-unused-expression
      this.addProductToCart(item);
      console.log(this.cartTotal)
      },
      
    );

    this.msj.recibirDatos_remove().subscribe(
      (item_remove: any) => {
      // tslint:disable-next-line: no-unused-expression
      
      this.removeProductTocart(this.cartItems, item_remove);

      console.log(this.cartItems)

      },
      
    );
    
    this.msj.recibirDatos_Eliminarlista().subscribe(
      () => {
      // tslint:disable-next-line: no-unused-expression
      this.cartItems = [];
      console.log("Ya no hay elementos en el carrito")
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


  reiniciarValores(){
    console.log(this.logged)
    if(this.logged){
      console.log("Está logueado")
    } else {
      
      console.log("El carrito debería ser 0")
      this.cartTotal = 0;
      this.enviarIconoCartTotal();
      this.cartItems = [];
    }
  }
  enviarIconoCartTotal(){
    this.msj.enviarDatos_icono(this.cartTotal);
    console.log("El total del Carrito es: " + this.cartTotal)
  }

  confirmarPedido(){
    if(this.cartItems.length != 0){
      this.showConfirm();
      this.cartItems_historial = [];
      console.log("Función confirmarPedido")
      for (const i in this.cartItems) {
        this.cartItems_historial.push(this.cartItems[i]);
      }
      console.log("Enviando el historial")
      this.msj_h.enviarHistorial(this.cartItems_historial);

    console.log(this.cartItems_historial)
    
    } else {
      console.log("No seas sapo")
    }
  }

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      
    },
    buttonsStyling: false
  })
  showConfirm(){
    this.swalWithBootstrapButtons.fire({
      title: 'Pedido en camino',
      icon: "success",
      showConfirmButton: true,
      confirmButtonText: "De acuerdo",
      width: 600,
      padding: '3em',
      
    })
  }
}


