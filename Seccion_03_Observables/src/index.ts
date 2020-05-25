import { Observable } from "rxjs"; // para crear un observable

//const obs$ = Observable.create();

/*
  Para que un observable se ejecute debe de terner una subscripción
*/
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  subs.complete();

  /* Cuando se llama el complete, ninguna llamada despues del
     .complete() ninguna emisión será notificado a los subscriptores
  */
  subs.next("Hola");
  subs.next("Mundo");
});

obs$.subscribe(console.log);
