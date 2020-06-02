import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";

const letras$ = of("a", "b", "c");

letras$.pipe(
  mergeMap((letra) =>
    interval(1000).pipe(
      map((i) => letra + i),
      take(3)
    )
  )
);
/*   .subscribe({
    next: (val) => console.log("val", val),
    error: (err) => console.warn("error", err),
    complete: () => console.info("complete"),
  }); */

const mousedown$ = fromEvent(document, "mousedown");
const mouseup$ = fromEvent(document, "mouseup");
const interval$ = interval();

mousedown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseup$))))
  .subscribe(console.log);
