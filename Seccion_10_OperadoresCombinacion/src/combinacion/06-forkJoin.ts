import { of, interval, forkJoin } from "rxjs";
import { take, delay } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5);
const interval$ = interval(1000).pipe(take(3));
const letra$ = of("a", "b", "c", "d").pipe(delay(3500));

// forkJoin(numeros$, interval$, letra$).subscribe(console.log);

/* forkJoin({ numeros$, interval$, letra$ }).subscribe((resp) => {
  console.log(resp);
}); */

forkJoin({ num: numeros$, int: interval$, let: letra$ }).subscribe((resp) => {
  console.log(resp);
});
