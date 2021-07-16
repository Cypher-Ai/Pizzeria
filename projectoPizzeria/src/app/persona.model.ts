export class Persona {
  constructor(
    public id: number,
    public nombres: string,
    public apellidos: string,
    public numeroTelefono: number,
    public numeroDni: number,
    public correo: string,
    public fechaNacimiento: string,
    public contrasenia: string
  ) {}
}
