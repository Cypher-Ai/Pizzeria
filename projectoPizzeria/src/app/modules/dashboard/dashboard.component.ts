import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { Persona } from 'src/app/persona.model';
import { Pedido } from 'src/app/pedido.model';
import { PersonaServicio } from 'src/app/persona.service';
import { PedidoData } from 'src/app/models/pedido-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data!: Pedido[];
  bigChart:any = [];
  cards:any = [];

  ELEMENT_DATA=this.dashboardService.getLstPedidos();
  ELEMENT_DATA2=this.dashboardService.getLstEntregados();
  

  displayedColumns: string[] = ['id', 'total', 'fecha', 'hora', 'ubicacion'];
  dataSource = new MatTableDataSource<PedidoData>(this.ELEMENT_DATA);
  dataSource2 = new MatTableDataSource<PedidoData>(this.ELEMENT_DATA2);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService, private personaService: PersonaServicio) { }

  ngOnInit() {
    this.data=this.personaService.getListaPedidos(0);
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();

    this.dataSource.paginator = this.paginator;
  }
  
}