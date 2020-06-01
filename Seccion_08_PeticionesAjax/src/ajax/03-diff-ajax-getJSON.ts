import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = "https://httpbinxxx.org/delay/1";
// const url = "https://api.github.com/users?per_page=5";

const manejaError = (err: AjaxError) => {
  console.warn("error:", err.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

/* const obs$ = ajax.getJSON(url).pipe(
  catchError(manejaError)
);
const obs2$ = ajax(url).pipe(
  catchError(manejaError)
); */

const obs$ = ajax.getJSON(url).pipe();
const obs2$ = ajax(url).pipe();

obs$.pipe(catchError(manejaError)).subscribe({
  next: (val) => console.log(val),
  error: (err) => console.warn("error en sub:", err),
  complete: () => console.info("complete"),
});
// obs2$.subscribe((data) => console.log("ajax:", data));
