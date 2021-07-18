import { Persona } from './persona.model';
export class PersonaServicio {
  personas: Persona[] = [
    new Persona(
      1,
      'Kevin',
      'Santiago',
      999666555,
      71239980,
      'kevin@hotmail.com',
      '20/3/2000',
      'pruebaContraseña1',
      []
    ),
    new Persona(
      2,
      'Jhamir',
      'Quicanio',
      95555236,
      71239555,
      'Elbrayan@hotmail.com',
      '19/3/2000',
      'pruebaContraseña2',
      []
    ),
  ];

  administradores: Persona[] = [
    new Persona(
      1,
      'Amado',
      'Martinez',
      8888774545,
      75684982,
      'theOne@hotmail.com',
      '15/3/2000',
      'admin435343',
      []
    ),
  ];
  //login ingresar a cuentas
  //usuario
  cuentaUser(correo: string, contrasenia: string) {
    let user!: Persona;
    let tipoError: string = '';
    let validarLogin;
    for (let i = 0; i < this.personas.length; i++) {
      if (
        this.personas[i].correo === correo &&
        this.personas[i].contrasenia === contrasenia
      ) {
        user = this.personas[i];
        tipoError = 'noHayError';
      } else if (
        this.personas[i].correo !== correo &&
        this.personas[i].contrasenia !== contrasenia
      ) {
        tipoError = 'noTieneCuenta';
      } else if (
        this.personas[i].correo !== correo &&
        this.personas[i].contrasenia === contrasenia
      ) {
        tipoError = 'noTieneCuenta';
      } else if (
        this.personas[i].correo === correo &&
        this.personas[i].contrasenia !== contrasenia
      ) {
        tipoError = 'contraseniaIncorrecta';
      }
    }
    validarLogin = { tipoError, user };
    return validarLogin;
  }
  cuentaAdmin(correo: string, contrasenia: string) {
    let admin!: Persona;
    let tipoError: string = '';
    let validarLogin;
    for (let i = 0; i < this.administradores.length; i++) {
      if (
        this.administradores[i].correo === correo &&
        this.administradores[i].contrasenia === contrasenia
      ) {
        admin = this.administradores[i];
        tipoError = 'noHayErrorLogAdmin';
      } else if (
        this.administradores[i].correo !== correo &&
        this.administradores[i].contrasenia !== contrasenia
      ) {
        tipoError = 'noTieneCuentaAdmin';
      } else if (
        this.administradores[i].correo !== correo &&
        this.administradores[i].contrasenia === contrasenia
      ) {
        tipoError = 'noTieneCuentaAdmin';
      } else if (
        this.administradores[i].correo === correo &&
        this.administradores[i].contrasenia !== contrasenia
      ) {
        tipoError = 'contraseniaAdminIncorrecta';
      }
    }
    validarLogin = { tipoError, admin };
    return validarLogin;
  }
  //creando metodos para verificar ciertos parametros del registro
  //generador de id
  generarId(): number {
    let id: number = 0;
    for (let i = 0; i <= this.personas.length; i++) {
      id += 1;
    }
    return id;
  }

  //verficiar si el numero de telefono ingresado en el formulario fue registrado anteriormente

  telefonoAnteriormenteRegistrado(persona: Persona): boolean {
    let telefonoRegistrado: boolean = false;
    for (let i = 0; i < this.personas.length; i++) {
      if (this.personas[i].numeroTelefono === persona.numeroTelefono) {
        telefonoRegistrado = true;
      }
    }
    for (let i = 0; i < this.administradores.length; i++) {
      if (this.administradores[i].numeroTelefono === persona.numeroTelefono) {
        telefonoRegistrado = true;
      }
    }
    return telefonoRegistrado;
  }
  //verificar si el número de dni ingresado en el formulario fue registrado anteriormente

  numDniRegistradoAnteriormente(persona: Persona): boolean {
    let numDniRegistrado: boolean = false;
    for (let i = 0; i < this.personas.length; i++) {
      if (this.personas[i].numeroDni === persona.numeroDni) {
        numDniRegistrado = true;
      }
    }
    for (let i = 0; i < this.administradores.length; i++) {
      if (this.administradores[i].numeroDni === persona.numeroDni) {
        numDniRegistrado = true;
      }
    }
    return numDniRegistrado;
  }

  //verificar si el correo ingresado en el formulario fue registrado anteriormente
  correoRegistradoAnteriormente(persona: Persona): boolean {
    let correoRegistrado: boolean = false;
    for (let i = 0; i < this.personas.length; i++) {
      if (this.personas[i].correo === persona.correo) {
        correoRegistrado = true;
      }
    }
    for (let i = 0; i < this.administradores.length; i++) {
      if (this.administradores[i].correo === persona.correo) {
        correoRegistrado = true;
      }
    }
    return correoRegistrado;
  }
}
