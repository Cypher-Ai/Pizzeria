import { Injectable } from '@angular/core';
import { PedidoData } from '../models/pedido-data';

@Injectable({
  providedIn: 'root'
})


export class DashboardService {
  idPorEntregar:number =0;
  constructor() { }

  lstPedidos: PedidoData[] = [
    
  ];

  lstEntregados: PedidoData[]=[
    { 
      id: 2, 
      total: 70, 
      fecha: '20/07/2021',
      hora: '16:40 p.m',
      ubicacion: "Asociación Señor del Huerto Mz 'A' lt 4",
    },
    { 
      id: 1, 
      total: 102.5, 
      fecha: '19/02/2002',
      hora: '13:40 p.m',
      ubicacion: "Jr. Finlandia N° 445",
    },
    { 
      id: 0, 
      total: 45.5, 
      fecha: '19/07/2021',
      hora: '11:30 a.m',
      ubicacion: "Jr. Londres N° 255",
    }
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