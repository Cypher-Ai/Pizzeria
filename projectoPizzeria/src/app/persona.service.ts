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
}
