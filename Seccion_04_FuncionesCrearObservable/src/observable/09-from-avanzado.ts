import { of, from } from "rxjs";

/*
  of = toma argumentos y genera una secuecia
  from = array, promise, iterable, observable
*/

const observer = {
  next: (val) => console.log("next: ", val),
  complete: () => console.log("Complete"),
};

//const sourcer$ = from([1, 2, 3, 4, 5]);
//const sourcer$ = of([1, 2, 3, 4, 5]);
//const sourcer$ = of(...[1, 2, 3, 4, 5]);
//const sourcer$ = from("Juan");
//const sourcer$ = of("Juan");

const sourcer$ = from(fetch("https://api.github.com/users/juxn89"));
//sourcer$.subscribe(observer);
/*
sourcer$.subscribe(async (resp) => {
  console.log(resp);

  const dataResp = await resp.json();
  console.log(dataResp);
});*/

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();
/*for (let id of miIterable) {
  console.log(id);
}*/

from(miIterable).subscribe(observer);
