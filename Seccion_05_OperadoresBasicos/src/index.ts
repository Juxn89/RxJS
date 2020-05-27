import { range, fromEvent } from "rxjs";
import { map } from "rxjs/operators";

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
const keyupCode$ = keyup$.pipe(map((event) => event.key));
keyupCode$.subscribe((key) => console.log("map: ", key));