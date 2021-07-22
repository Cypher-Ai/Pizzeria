import { Pedido } from './pedido.model';

export class Persona {
  constructor(
    public id: number,
    public nombres: string,
    public apellidos: string,
    public numeroTelefono: number,
    public numeroDni: number,
    public correo: string,
    public fechaNacimiento: string,
    public direccion: string,
    public contrasenia: string,
    public historialPedidos: Pedido[] = []
  ) {}
  getHistorialPedidos(){
    return this.historialPedidos;
  }

}
