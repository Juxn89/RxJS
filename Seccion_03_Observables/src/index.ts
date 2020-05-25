import { Observable, observable, Observer } from "rxjs"; // para crear un observable

//const obs$ = Observable.create();

const observer: Observer<any> = {
  next: (value) => console.log("Siguiente [next]: ", value),
  error: (error) => console.warn("Siguiente [obs]: ", error),
  complete: () => console.info("completado [obs]"),
};

/*
  Para que un observable se ejecute debe de terner una subscripción
*/
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // Forzar un error
  const a = undefined;
  a.nombre = "Juan";

  subs.complete();

  /* Cuando se llama el complete, ninguna llamada despues del
     .complete() ninguna emisión será notificado a los subscriptores
  */
  subs.next("Hola");
  subs.next("Mundo");
});

obs$.subscribe((resp) => {
  console.log(resp);
});

obs$.subscribe(
  (valor) => console.log("next: ", valor),
  (error) => console.warn("error: ", error),
  () => console.info("completado")
);

obs$.subscribe(observer);
