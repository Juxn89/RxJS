import { scan, reduce, map } from "rxjs/operators";
import { interval, from } from "rxjs";

const numbers = [1, 2, 3, 4, 5];
const totalAcumulador = (acc, cur) => acc + cur;

//reduce
from(numbers).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

//scan
from(numbers).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

// Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: "jxn", autenticado: true, token: "ABC" },
  { id: "jxn", autenticado: true, token: "ABC123" },
  { id: "jxn", autenticado: true, token: "ABC" },
];

const state$ = from(user).pipe(
  scan<Usuario>(
    (acc, curr) => {
      return { ...acc, ...curr };
    },
    { edad: 33 }
  )
);

const id$ = state$.pipe(map((state) => state.id));
id$.subscribe(console.log);
