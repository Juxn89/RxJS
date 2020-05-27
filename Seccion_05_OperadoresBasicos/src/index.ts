import { range, fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";

//range(1, 5).subscribe((x) => console.log(x * 10));
/*
range(1, 5)
  .pipe(
    map<number, string>((val) => (val * 10).toString())
  )
  .subscribe(console.log);
*/

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
//keyup$.pipe(map((event) => event.key));
const keyupKey$ = keyup$.pipe(map((event) => event.key));

const keyupPluck$ = keyup$.pipe(pluck("target", "baseURI"));

keyupKey$.subscribe((key) => console.log("map: ", key));
keyupPluck$.subscribe((key) => console.log("pluck: ", key));
