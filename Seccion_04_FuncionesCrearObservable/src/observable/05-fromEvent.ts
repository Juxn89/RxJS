import { fromEvent } from "rxjs";

/*
  Nos permite crear observable en base a un EventTarget
*/

//Eventos del DOM

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => console.log("next: ", val),
};

//src1$.subscribe(observer);
src1$.subscribe(({ x, y }) => {
  console.log(x, y);
});
src2$.subscribe((evento) => {
  console.log(evento.key);
});
