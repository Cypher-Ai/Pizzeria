import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaServicio } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projectoPizzeria';
  text!: string;

  personas: Persona[] = [];
  constructor(private personaServicio: PersonaServicio) {
    this.personas = personaServicio.personas;
  }

  validarRegistro(): boolean {
    let existeUsuario: boolean = false;
    for (let i = 0; i < this.personas.length - 1; i++) {
      if (this.personas[i].numeroDni === this.personas[i + 1].numeroDni) {
        existeUsuario = true;
      }
    }
    return existeUsuario;
  }

  logearCuenta(correo: string, contrasenia: string) {
    let existeCuenta: boolean = false;
    for (let i = 0; i < this.personas.length - 1; i++) {
      if (
        this.personas[i].correo === correo &&
        this.personas[i].contrasenia === contrasenia
      ) {
        existeCuenta = true;
      }
    }
    return existeCuenta;
  }
}
