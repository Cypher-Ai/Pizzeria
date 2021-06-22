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
  nombresInput!: string;
  apellidosInput!: string;
  numeroTelefonoInput!: number;
  numeroDniInput!: number;
  correoInput!: string;
  contraseniaInput!: string;
  persona1!: Persona;

  personas: Persona[] = [];
  agregarPersona() {
    this.persona1 = new Persona(
      this.nombresInput,
      this.apellidosInput,
      this.numeroTelefonoInput,
      this.numeroDniInput,
      this.correoInput,
      this.contraseniaInput
    );
    this.personas.push(this.persona1);
  }

  formRegistro: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      nombres: formBuilder.control('', Validators.required),
      apellidos: formBuilder.control('', Validators.required),
      telefono: formBuilder.control('', Validators.required),
      nroDni: formBuilder.control('', [Validators.required, Validators.min(0)]),
      correo: formBuilder.control('', [Validators.required, Validators.email]),
      contrasenia: formBuilder.control(' ', Validators.required),
      cContrasenia: formBuilder.control('', Validators.required),
    });
  }

  public onSubmit() {
    console.log(this.formRegistro.value);
    console.log(this.personas.length);
  }

  public control(name: string) {
    return this.formRegistro.get(name);
  }
}
