import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submitted: boolean = false;
  correoLoginInput!: string;
  contraseniaLoginInput!: string;
  personaLogeada!: Persona;
  personas: Persona[] = [];
  administradores: Persona[] = [];
  administradorLogeado!: Persona;
  formLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private personaServicio: PersonaServicio
  ) {
    this.administradores = personaServicio.administradores;
    this.personas = personaServicio.personas;
    this.formLogin = this.formBuilder.group({
      correo: formBuilder.control('', [Validators.required, Validators.email]),
      contrasenia: formBuilder.control(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  private cuentaUser() {
    let existeCuenta: boolean = false;
    for (let i = 0; i < this.personas.length; i++) {
      if (
        this.personas[i].correo === this.correoLoginInput &&
        this.personas[i].contrasenia === this.contraseniaLoginInput
      ) {
        this.personaLogeada = this.personas[i];
        existeCuenta = true;
      }
    }
    return existeCuenta;
  }
  private cuentaAdmin() {
    let existeCuenta: boolean = false;
    for (let i = 0; i < this.administradores.length; i++) {
      if (
        this.administradores[i].correo === this.correoLoginInput &&
        this.administradores[i].contrasenia === this.contraseniaLoginInput
      ) {
        this.administradorLogeado = this.administradores[i];
        existeCuenta = true;
      }
    }
    return existeCuenta;
  }
  login() {
    if (this.formLogin.valid && this.cuentaAdmin()) {
      console.log(this.administradorLogeado.id);
      console.log('eres el admin');
    } else if (this.formLogin.valid && this.cuentaUser()) {
      console.log(this.personaLogeada.id);
      console.log('eres usuario');
    } else {
      console.log('no tienes cuenta');
    }
  }

  get f() {
    return this.formLogin.controls;
  }
  public onSubmit() {
    this.submitted = true;
    if (this.formLogin.invalid) {
      return;
    }
  }
  public control(name: string) {
    return this.formLogin.get(name);
  }
}
