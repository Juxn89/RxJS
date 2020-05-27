import { range, Observable, from } from "rxjs";
import { filter, map } from "rxjs/operators";

/*
range(1, 10)
  .pipe(filter((val) => val % 2 === 1))
  .subscribe(console.log);
*/

range(1, 10).pipe(
  filter((val, i) => {
    console.log("val: ", i);
    return val % 2 === 1;
  })
);
//.subscribe(console.log);

interface Personajes {
  tipo: string;
  nombre: string;
}

const personajes: Personajes[] = [
  { tipo: "heroe", nombre: "Batman" },
  { tipo: "heroe", nombre: "Robin" },
  { tipo: "villano", nombre: "Joker" },
];

from(personajes)
  .pipe(filter((p) => p.tipo === "heroe"))
  .subscribe(console.log);
