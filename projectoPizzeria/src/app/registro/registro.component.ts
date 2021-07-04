import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { Persona } from './persona.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
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
  persona1!: Persona;
  personas: Persona[] = [];

  formRegistro: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group(
      {
        nombres: formBuilder.control('', [Validators.required]),
        apellidos: formBuilder.control('', [Validators.required]),
        telefono: formBuilder.control('', [
          Validators.required,
          Validators.min(0),
        ]),
        nroDni: formBuilder.control('', [
          Validators.required,
          Validators.min(0),
        ]),
        fechaNacimiento: formBuilder.control('', Validators.required),
        correo: formBuilder.control('', [
          Validators.required,
          Validators.email,
        ]),
        contrasenia: formBuilder.control(null, [
          Validators.required,
          Validators.minLength(6),
        ]),
        cContrasenia: formBuilder.control(null, [Validators.required]),
      },
      {
        validators: this.MustMatch('contrasenia', 'cContrasenia'),
      }
    );
  }
  agregarPersona() {
    if (!this.formRegistro.invalid) {
      this.persona1 = new Persona(
        this.nombresInput,
        this.apellidosInput,
        this.numeroTelefonoInput,
        this.numeroDniInput,
        this.correoInput,
        this.fechaNacimientoInput,
        this.contraseniaInput
      );
      this.personas.push(this.persona1);
    }
  }

  get f() {
    return this.formRegistro.controls;
  }

  
  MustMatch(contrasenia1: string, confirmarContrasenia: string) {
    return (formRegistro: FormGroup) => {
      const control = formRegistro.controls[contrasenia1];
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

  public onSubmit() {
    console.log(this.personas.length);
    this.submitted = true;
    if (this.formRegistro.invalid) {
      return;
    }
  }

  public control(name: string) {
    return this.formRegistro.get(name);
  }

  personaRepetida() {
    for (let i = 0; i < 3; i++) {
      
    }
  }
}
