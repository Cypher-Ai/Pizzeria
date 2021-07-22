import { Component, Input, OnInit} from '@angular/core';
import { Item } from '../models/item';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart-item/cart.service';
import { CartItem } from '../models/cart-item';
import { PersonaServicio } from '../persona.service';
//Texto de alerta
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  @Input()
  productItem!: Item;
  cartItem!: CartItem;

  faShoppingCart = faShoppingCart;

  Seleccionado: string = 'Seleccione un tipo';
  verSeleccion: string = '';

  indice!: number;

  logged!:boolean;

  constructor(private msj: CartService, private personaServicio: PersonaServicio, private router: Router){
  }
  usuarioLogeado!: Persona;
  

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.usuarioLogeado=this.personaServicio.usuarioLogeado;
    this.logged=this.personaServicio.logged;
    
    console.log(this.logged); 
  }
  // tslint:disable-next-line: typedef
  AddToCart(){
    // Enviar el producto
    
      if (this.Seleccionado != "Seleccione un tipo") {
        // tslint:disable-next-line: max-line-length
          this.cartItem = new CartItem(this.productItem.id, this.productItem.nombre + " - " + String(this.productItem.detallesPrecios[this.indice]), this.productItem.detalles, this.productItem.precios[this.indice], 1, this.productItem.imgUrl);
          this.msj.enviarDatos(this.cartItem);
          this.showAdded();
        } else {
          this.showAlert();
        }
      
  }
  // tslint:disable-next-line: typedef
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
    timer: 1000,
    timerProgressBar: true,
    
  })
  
  
  showAdded(){
    this.Toast.fire({
      icon: 'success',
      title: 'Añadido correctamente'
    })
  }
}


