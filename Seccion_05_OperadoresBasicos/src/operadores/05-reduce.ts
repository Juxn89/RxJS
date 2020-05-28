const numbers = [1, 2, 3, 4, 5];
const totalReducer = (a: number, v: number) => {
  return a + v;
};

const total = numbers.reduce(totalReducer, 0);
console.log("Total reducer (js): ", total);

import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

interval(500)
  .pipe(take(6), tap(console.log), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("Complete"),
  });
