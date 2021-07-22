import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.service';
import { CartService } from '../cart-item/cart.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuarioLogeado!: Persona;
  logged!:boolean;
  loggedAdmin!:boolean;

  // tslint:disable-next-line: typedef
  cartTotal: number = this.receiveTotal();


  constructor(private msj: CartService, private personaServicio: PersonaServicio, private router: Router) { }

  ngOnInit(): void {
    this.usuarioLogeado=this.personaServicio.usuarioLogeado;
    this.logged=this.personaServicio.logged;
    this.loggedAdmin=this.personaServicio.loggedAdmin;
    console.log(this.logged);
    
    console.log("-->xd?")
    this.msj.sendSignal();

    
    


  }
  logOut(){
    this.logged=false;
    this.loggedAdmin=false;
    this.personaServicio.loggedAdmin=false;
    this.personaServicio.logged=false;
    //Se envía la señal para eliminar la lista que hay dentro del carrito
    this.msj.enviarDatos_Eliminarlista();

   Swal.fire(
      '	(っ˘̩╭╮˘̩)っ \nCerraste Sesión',
      'Adiós🤧',
      'success'
    ).then(()=>{
      this.router.navigateByUrl('/menu');
    });    
  }

  receiveTotal(){
    this.msj.recibirDatos_icono().subscribe(
      (item: any) => {
      // tslint:disable-next-line: no-unused-expression
      
      this.cartTotal = Number(item);
      console.log("Icono carrito = "+this.cartTotal)
      },
      
    );
    return Number(this.cartTotal);
  }
}
