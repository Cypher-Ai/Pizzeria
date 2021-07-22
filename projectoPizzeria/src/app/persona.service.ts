import { Item } from './models/item';
import { Pedido } from './pedido.model';
import { Persona } from './persona.model';

export class PersonaServicio {
  usuarioLogeado!: Persona;
  logged:boolean=false;
  loggedAdmin!:boolean;
  personas: Persona[] = [
    new Persona(
      1,
      'Kevin',
      'Santiago',
      999666555,
      71239980,
      'kevin@hotmail.com',
      '20/3/2000',
      'Av. Brazil 325',
      'pruebaContraseña1',
      [
        new Pedido(
          1,
          [
            new Item(0,"Pizza Hawaiana","Deliciosa Pizza con Piña",[16.00,32.00],["Mediana","Familiar"],"https://nuestrasrecetas.es/wp-content/uploads/2015/05/hawaiana.jpg"),
            new Item(1,"Pizza Americana","Deliciosa Pizza con America",[14.00,30.00],["Mediana","Familiar"],"https://www.periodistadigital.com/wp-content/uploads/2020/02/pizza-americana.jpg")
          ],
          '02/02/2002',
          '9:30',
          'Urb. Jose Gabriel Condorcanqui 220'
        ),
        new Pedido(
          2,
          [
            new Item(1,"La segunda vuelta","Llevate una pizza no se que poner, inserteTexto()",
            [35.00,35.00],["La Roja Suprema","La Carcelera"],"../../assets/La seguna vuelta.jpg"),
            new Item(3,"Pizza Salami","Pizza con Salami :pog:",[14.00,30.00],["Mediana","Familiar"],"https://beta.da-antonio.be/wp-content/uploads/2018/11/salami.jpeg"),
          ],
          '02/02/2002',
          '10:30',
          "Jr. José Ortíz Vergara N° 14"
        ),
        new Pedido(
          3,
          [
            new Item(0, "Pan al ajo","Rico pan al ajo JA",[6],["5 unidades"],"https://www.gourmet.cl/wp-content/uploads/2014/09/pan-de-ajo.jpg"),
          ],
          '03/02/2002',
          '12:30',
          "Calle El Nazareno Mz A lt 2"
        ),
      ]
    ),
    new Persona(
      2,
      'Jhamir',
      'Quicanio',
      95555236,
      71239555,
      'Elbrayan@hotmail.com',
      '19/3/2000',
      'Jr. 3 mascaras 223',
      'pruebaContraseña2',
      [
        new Pedido(
          1,
          [
            new Item(0,"Pizza Hawaiana","Deliciosa Pizza con Piña",[16.00,32.00],["Mediana","Familiar"],"https://nuestrasrecetas.es/wp-content/uploads/2015/05/hawaiana.jpg"),
            new Item(1,"Pizza Americana","Deliciosa Pizza con America",[14.00,30.00],["Mediana","Familiar"],"https://www.periodistadigital.com/wp-content/uploads/2020/02/pizza-americana.jpg")
          ],
          '02/02/2002',
          '9:30',
          "Urb Mariscal Cáceres 150"
        ),
        new Pedido(
          2,
          [
            new Item(1,"La segunda vuelta","Llevate una pizza no se que poner, inserteTexto()",
            [35.00,35.00],["La Roja Suprema","La Carcelera"],"../../assets/La seguna vuelta.jpg"),
            new Item(3,"Pizza Salami","Pizza con Salami :pog:",[14.00,30.00],["Mediana","Familiar"],"https://beta.da-antonio.be/wp-content/uploads/2018/11/salami.jpeg"),
          ],
          '02/02/2002',
          '10:30',
          "Enace Mz T lt 14"
        ),
        new Pedido(
          3,
          [
            new Item(0, "Pan al ajo","Rico pan al ajo JA",[6],["5 unidades"],"https://www.gourmet.cl/wp-content/uploads/2014/09/pan-de-ajo.jpg"),
          ],
          '03/02/2002',
          '12:30',
          "Jr los Andes 5ta cuadra"
        ),
      ]
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
      'Jr.Domingo Nieto 225',
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

  getListaPedidos(index: number){
    return this.personas[index].getHistorialPedidos();
  }
}
