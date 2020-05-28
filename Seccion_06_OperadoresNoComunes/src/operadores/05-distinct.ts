import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numeros$.pipe(distinct()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personjes: Personaje[] = [
  { nombre: "Megaman" },
  { nombre: "X" },
  { nombre: "Zero" },
  { nombre: "Megaman" },
  { nombre: "Dr. Willy" },
  { nombre: "X" },
  { nombre: "Megaman" },
  { nombre: "Zero" },
];

from(personjes)
  .pipe(distinct((p) => p.nombre))
  .subscribe(console.log);
