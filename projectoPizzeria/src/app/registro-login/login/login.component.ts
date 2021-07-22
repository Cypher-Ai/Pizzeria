import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Persona } from '../../persona.model';
import { PersonaServicio } from '../../persona.service';
import { CartService } from 'src/app/cart-item/cart.service';
import { Router } from '@angular/router';



declare var jQuery: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  logged: boolean=false;
  loggedAdmin: boolean=false;
  submitted: boolean = false;
  correoLoginInput!: string;
  contraseniaLoginInput!: string;
  usuarioLogeado!: Persona;
  personas: Persona[] = [];
  administradores: Persona[] = [];
  administradorLogeado!: Persona;
  formLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private personaServicio: PersonaServicio,
    private router: Router,
    private msj: CartService
  ) {
    this.administradores = personaServicio.administradores;
    this.personas = personaServicio.personas;

    this.formLogin = this.formBuilder.group({
      correo: formBuilder.control('', [Validators.required, Validators.email]),
      contrasenia: formBuilder.control(null, [Validators.required]),
    });
  }
  //metodo para marcar los errores en el html
  get f() {
    return this.formLogin.controls;
  }
  public onSubmit() {
    this.submitted = true;
    if (this.formLogin.invalid) {
      return;
    }
  }
  //metodo para los validadores
  public control(name: string) {
    return this.formLogin.get(name);
  }
  //verificacion del login
  login() {
    if (this.formLogin.valid) {
      let userLogin = this.personaServicio.cuentaUser(
        this.correoLoginInput,
        this.contraseniaLoginInput
      );
      let adminLogin = this.personaServicio.cuentaAdmin(
        this.correoLoginInput,
        this.contraseniaLoginInput
      );

      if (adminLogin.tipoError === 'noHayErrorLogAdmin') {
        this.administradorLogeado = adminLogin.admin;
        this.loginAdminCorrecto();
        this.limpiarFom();
        this.cerrarModal();
      } else if (
        adminLogin.tipoError === 'noTieneCuentaAdmin' &&
        userLogin.tipoError === 'noTieneCuenta'
      ) {
        this.loginError();
      } else if (adminLogin.tipoError === 'contraseniaAdminIncorrecta') {
        this.logContraseñaIncorreta();
      } else if (userLogin.tipoError === 'noHayError') {
        this.usuarioLogeado = userLogin.user;
        this.loginUserCorrecto();
        this.cerrarModal();
      } else if (userLogin.tipoError === 'contraseniaIncorrecta') {
        this.logContraseñaIncorreta();
      }
    } else {
      this.loginVacio();
    }
  }

  //mensajes modales :3
  private loginUserCorrecto() {
    Swal.fire(
      '	(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧\nBienvenido ' + this.usuarioLogeado.nombres,
      '🤡Disfruta de tu experiencia🤡',
      'success'
    ).then(()=>{
      this.logged=true;
      this.router.navigateByUrl('/account');
      this.personaServicio.usuarioLogeado=this.usuarioLogeado;
      this.personaServicio.logged=this.logged;
      this.personaServicio.loggedAdmin=this.loggedAdmin;
      console.log("Usuario Logeado "+this.usuarioLogeado.nombres)
      console.log("Usuario Enviado "+ this.personaServicio.usuarioLogeado.nombres);
      //Se envia una señal para limpiar el carrito
      this.msj.enviarDatos_Eliminarlista();

    });    
  }
  private loginAdminCorrecto() {
    Swal.fire(
      '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ \nBienvenido ' + this.administradorLogeado.nombres,
      '🤡Disfruta de tu experiencia🤡',
      'success'
    ).then(()=>{
      this.loggedAdmin=true;
      this.router.navigateByUrl('/admin');
      this.personaServicio.usuarioLogeado=this.administradorLogeado;
      this.personaServicio.logged=this.logged;
      this.personaServicio.loggedAdmin=this.loggedAdmin;
      console.log("Usuario Logeado "+this.administradorLogeado)
      console.log("Usuario Enviado "+ this.personaServicio.usuarioLogeado);
      
    });
  }
  private logContraseñaIncorreta() {
    Swal.fire(
      '	(っ˘̩╭╮˘̩)っ \nContraseña incorrecta',
      '🤡Ingrese nuevamente🤡',
      'warning'
    );
  }
  private loginError() {
    Swal.fire(
      '(＃￣ω￣)\n Login errado',
      '🤡Verifique bien sus datos🤡 ',
      'error'
    );
  }
  loginVacio() {
    Swal.fire({
      title: 'Llene todos los campos',
      width: 600,
      padding: '3em',
      background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media.taringa.net/knn/identity/aHR0cHM6Ly9rMzMua24zLm5ldC90YXJpbmdhLzAvRC9BL0IvMS84L3ZhZ29uZXR0YXMvNUQ0LmdpZg")
        left top
        no-repeat
      `,
    });
  }
  cerrarModal() {
    jQuery('#loginCliente').modal('hide');
  }
  //metodo para limpiar el formulario
  private limpiarFom() {
    this.formLogin.reset();
  }
}
