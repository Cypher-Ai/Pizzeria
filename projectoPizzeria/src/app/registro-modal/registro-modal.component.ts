import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registro-modal',
  templateUrl: './registro-modal.component.html',
  styleUrls: ['./registro-modal.component.css'],
})
export class RegistroModalComponent {
  title = 'appBootstrap';

  closeResult!: string;

  constructor() {}
}
