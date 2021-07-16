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
  formLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private personaServicio: PersonaServicio
  ) {
    this.personas = personaServicio.personas;
    this.formLogin = this.formBuilder.group({
      correo: formBuilder.control('', [Validators.required, Validators.email]),
      contrasenia: formBuilder.control(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  private existeCuenta() {
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
  login() {
    if (this.formLogin.valid && this.existeCuenta()) {
      console.log(this.personaLogeada.id);
    } else {
      console.log('burro no tienes cuenta');
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
