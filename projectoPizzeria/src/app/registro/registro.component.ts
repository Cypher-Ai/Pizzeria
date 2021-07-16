import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  titulo: string = 'Registro de datos';
  submitted: boolean = false;

  nombresInput!: string;
  apellidosInput!: string;
  numeroTelefonoInput!: number;
  numeroDniInput!: number;
  correoInput!: string;
  fechaNacimientoInput!: string;
  contraseniaInput!: string;
  confimarContraseniaInput!: string;
  persona!: Persona;
  personas: Persona[] = [];
  formRegistro!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personaServicio: PersonaServicio
  ) {
    this.personas = personaServicio.personas;
  }
  ngOnInit() {
    this.formRegistro = this.fb.group(
      {
        nombres: ['', [Validators.required]],
        apellidos: ['', [Validators.required]],
        telefono: ['', [Validators.required, Validators.min(0)]],
        nroDni: ['', [Validators.required, Validators.min(0)]],
        fechaNacimiento: ['', [Validators.required]],
        correo: ['', [Validators.required, Validators.email]],
        contrasenia: [null, [Validators.required, Validators.minLength(6)]],
        cContrasenia: [null, [Validators.required]],
      },
      {
        validators: this.MustMatch('contrasenia', 'cContrasenia'),
      }
    );
  }

  //método para las validaciones respectivas

  get f() {
    return this.formRegistro.controls;
  }

  MustMatch(contrasenia: string, confirmarContrasenia: string) {
    return (formRegistro: FormGroup) => {
      const control = formRegistro.controls[contrasenia];
      const machingControl = formRegistro.controls[confirmarContrasenia];
      if (machingControl.errors && !machingControl.errors.MustMatch) {
        return;
      }
      if (control.value !== machingControl.value) {
        machingControl.setErrors({ MustMatch: true });
      } else {
        machingControl.setErrors(null);
      }
    };
  }
  public control(name: string) {
    return this.formRegistro.get(name);
  }

  //métodos que sirven para el registro de las personas
  private noExisteUsuario(): boolean {
    let noExisteUsuario: boolean = true;
    for (let i = 0; i < this.personas.length; i++) {
      console.log(this.personas[i].correo + '=' + this.correoInput);
      console.log(this.personas[i].numeroDni + '=' + this.numeroDniInput);
      if (
        this.personas[i].correo === this.correoInput ||
        this.personas[i].numeroDni === this.numeroDniInput
      ) {
        noExisteUsuario = false;
      }
    }
    return noExisteUsuario;
  }

  generarId(): number {
    let id: number = 0;
    for (let i = 0; i <= this.personas.length; i++) {
      id += 1;
    }
    return id;
  }

  registrarPersona() {
    if (this.formRegistro.valid && this.noExisteUsuario()) {
      this.persona = new Persona(
        this.generarId(),
        this.nombresInput,
        this.apellidosInput,
        this.numeroTelefonoInput,
        this.numeroDniInput,
        this.correoInput,
        this.fechaNacimientoInput,
        this.contraseniaInput
      );
      this.personaServicio.personas.push(this.persona);
      console.log(this.personaServicio.personas.length);
      this.limpiarFormulario();
    } else {
      console.log(this.personaServicio.personas.length);
    }
  }
  //metodo para subir formulario
  public onSubmit() {
    this.submitted = true;
    if (this.formRegistro.invalid) {
      return;
    }
  }
  //metodo para refreshear la página
  refresh(): void {
    window.location.reload();
  }

  //metodo que sirve para limpiar el formulario
  limpiarFormulario() {
    this.nombresInput = '';
    this.apellidosInput = '';
    this.numeroTelefonoInput = parseInt(' ');
    this.correoInput = '';
    this.numeroDniInput = parseInt(' ');
    this.confimarContraseniaInput = '';
    this.contraseniaInput = '';
    this.fechaNacimientoInput = '';
  }
}
