import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submitted: boolean = false;

  correoLoginInput!: string;

  contraseniaLoginInput!: string;

  formLogin: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      correo: formBuilder.control('', [Validators.required, Validators.email]),
      contrasenia: formBuilder.control(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      cContrasenia: formBuilder.control(null, [Validators.required]),
    });
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
