import { fromEvent } from "rxjs";
import { first, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    tap<MouseEvent>(() => console.log("tap")),
    map(({ clientY, clientX }) => ({ clientY, clientX })),
    //first()
    first((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("Complete"),
  });
