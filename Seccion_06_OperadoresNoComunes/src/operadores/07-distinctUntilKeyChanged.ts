import { from } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

interface Personaje {
  nombre: string;
}

const personjes: Personaje[] = [
  { nombre: "Megaman" },
  { nombre: "Megaman" },
  { nombre: "X" },
  { nombre: "Zero" },
  { nombre: "Megaman" },
  { nombre: "Dr. Willy" },
  { nombre: "X" },
  { nombre: "X" },
  { nombre: "Megaman" },
  { nombre: "Zero" },
];

from(personjes).pipe(distinctUntilKeyChanged("nombre")).subscribe(console.log);
