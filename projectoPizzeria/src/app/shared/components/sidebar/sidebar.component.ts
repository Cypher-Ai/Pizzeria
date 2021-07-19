import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona.model';
import { PersonaServicio } from 'src/app/persona.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  usuarioLogeado!: Persona;
  constructor(private personaServicio: PersonaServicio) { }

  ngOnInit() {
    this.usuarioLogeado=this.personaServicio.usuarioLogeado;
  }

}