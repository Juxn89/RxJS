import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 3000);

  return () => clearInterval(intervalID);
});

/* Subject es un tipo especial de Observable
  1- Casteo múltiple: muchas subcripciones estan sujetas a este Subject, para distribuir ese valor.
  2- También  es un observer
  3- Implementa: next, error y complete
 */
const subject$ = new Subject();
intervalo$.subscribe(subject$);

//const sub1 = intervalo$.subscribe((rnd) => console.log("sub 1:", rnd));
//const sub2 = intervalo$.subscribe((rnd) => console.log("sub 2:", rnd));

const sub1 = subject$.subscribe((rnd) => console.log("sub 1:", rnd));
const sub2 = subject$.subscribe((rnd) => console.log("sub 2:", rnd));
