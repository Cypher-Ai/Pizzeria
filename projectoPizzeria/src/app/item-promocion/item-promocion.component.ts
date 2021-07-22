import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//Conexión con el carrito
import { CartService } from '../cart-item/cart.service';
import { CartItem } from '../models/cart-item';
//Texto de alerta
import Swal from 'sweetalert2';
import { PersonaServicio } from '../persona.service';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';


@Component({
  selector: 'app-item-promocion',
  templateUrl: './item-promocion.component.html',
  styleUrls: ['./item-promocion.component.css']
})
export class ItemPromocionComponent implements OnInit{

  @Input() 
  promocionItem!: Item;
  cartItem!: CartItem;

  faShoppingCart = faShoppingCart;

  Seleccionado: string = 'Seleccione un tipo';
  verSeleccion: string = '';

  indice!: number;
  
  constructor(private msj: CartService, private personaServicio: PersonaServicio, private router: Router){
  }
  usuarioLogeado!: Persona;
  logged!:boolean;
  

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.usuarioLogeado=this.personaServicio.usuarioLogeado;
    this.logged=this.personaServicio.logged;
    
    console.log(this.logged); 
  }
  // tslint:disable-next-line: typedef
  AddToCart(){
    
    if (this.Seleccionado != "Seleccione un tipo") {
      // tslint:disable-next-line: max-line-length
      this.cartItem = new CartItem(this.promocionItem.id, this.promocionItem.nombre + ' - ' + String(this.promocionItem.detallesPrecios[this.indice]), this.promocionItem.detalles, this.promocionItem.precios[this.indice], 1, this.promocionItem.imgUrl);
      this.msj.enviarDatos(this.cartItem);
      this.showAdded();
    } else {
      this.showAlert();
    }
  }
  capturarPrecio(){
    // Enviar el precio del producto
    
      this.verSeleccion = this.Seleccionado;
      this.indice = Number(this.verSeleccion);
      
      return this.indice;
    
  }

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      
    },
    buttonsStyling: false
  })
  showAlert(){
    this.swalWithBootstrapButtons.fire({
      title: 'Seleccione una opción',
      icon: "error",
      showConfirmButton: true,
      confirmButtonText: "De acuerdo",
      width: 600,
      padding: '3em',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(248,244,237,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
  }

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer:900,
    timerProgressBar: true,
    
  })
  
  
  showAdded(){
    this.Toast.fire({
      icon: 'success',
      title: 'Añadido correctamente'
    })
  }
}
