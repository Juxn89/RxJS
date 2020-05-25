import { Observable, observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  let contador = 0;

  const interval = setInterval(() => {
    subs.next(contador++);
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Intérvalo destruido");
  };
});

const subs1 = intervalo$.subscribe((num) => console.log("Num1:", num));
const subs2 = intervalo$.subscribe((num) => console.log("Num2:", num));
const subs3 = intervalo$.subscribe((num) => console.log("Num3:", num));

setTimeout(() => {
  subs1.unsubscribe();
  subs2.unsubscribe();
  subs3.unsubscribe();

  console.log("Completado Timeout");
}, 3000);
