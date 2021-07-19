import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { Persona } from 'src/app/persona.model';
import { Pedido } from 'src/app/pedido.model';
import { PersonaServicio } from 'src/app/persona.service';

export interface PedidoData {
  id: number;
  total: number;
  fecha: string;
  hora: string;
  ubicacion: string;
}

const ELEMENT_DATA: PedidoData[] = [
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
    id: 4, 
    total: 69.42, 
    fecha: '02/02/2002',
    hora: '11:30',
    ubicacion: "Odio mi vida³",
  }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data!: Pedido[];
  bigChart:any = [];
  cards:any = [];
  pieChart:any = [];

  dataFinal=[];

  

  displayedColumns: string[] = ['id', 'total', 'fecha', 'hora', 'ubicacion'];
  dataSource = new MatTableDataSource<PedidoData>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService, private personaService: PersonaServicio) { }

  ngOnInit() {
    this.data=this.personaService.getListaPedidos(0);
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }
  
}