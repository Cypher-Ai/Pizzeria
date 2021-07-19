import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.service';
@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css'],
})
export class RegistroLoginComponent implements OnInit {
  

  personas: Persona[] = [];
  constructor(
    private personaServicio: PersonaServicio,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.personas = this.personaServicio.personas;
  }
  login() {
    this.router.navigate(['usuario/login']);
  }
}
