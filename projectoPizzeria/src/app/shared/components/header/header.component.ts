import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/persona.model';
import { PersonaServicio } from 'src/app/persona.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuarioLogeado!: Persona;
  logged!:boolean;
  loggedAdmin!:boolean;
  cartTotal = 0;

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private personaServicio: PersonaServicio, private router:Router) { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  logOut(){
    this.logged=false;
    this.loggedAdmin=false;
    this.personaServicio.loggedAdmin=false;
    this.personaServicio.logged=false;

   Swal.fire(
      '	(っ˘̩╭╮˘̩)っ \nCerraste Sesión',
      'Adiós🤧',
      'success'
    ).then(()=>{
      this.router.navigateByUrl('/menu');
    });    
  }

}