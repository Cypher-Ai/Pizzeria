import { Injectable } from '@angular/core';
import { PedidoData } from '../models/pedido-data';

@Injectable({
  providedIn: 'root'
})


export class DashboardService {

  constructor() { }

  lstPedidos: PedidoData[] = [
    { 
      id: 0, 
      total: 45.5, 
      fecha: '02/02/2002',
      hora: '9:30',
      ubicacion: "Odio mi vida",
    },
    { 
      id: 1, 
      total: 102.5, 
      fecha: '04/02/2002',
      hora: '12:30',
      ubicacion: "Odio mi vida²",
    },
    { 
      id: 2, 
      total: 69.42, 
      fecha: '02/02/2002',
      hora: '11:30',
      ubicacion: "Odio mi vida³",
    }
  ];

  lstEntregados: PedidoData[]=[

  ]
  getLstPedidos(){
    return this.lstPedidos;
  }

  getLstEntregados(){
    return this.lstEntregados;
  }

  bigChart() {
    return [
    {
      name: 'Hawaiana',
      data: [22, 35, 30, 40, 33, 37, 42, 40]
    }, {
      name: 'La segunda Vuelta',
      data: [25, 28, 20, 19, 23, 28, 25, 30]
    }, {
      name: 'Pan al ajo',
      data: [18, 15, 20, 23, 18, 15, 19, 23]
    }, {
      name: 'Las picositas',
      data: [12, 19, 18, 20, 15, 14, 18, 17]
    }, {
      name: 'Americana',
      data: [11, 8, 16, 18, 13, 14, 15, 19]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }
}