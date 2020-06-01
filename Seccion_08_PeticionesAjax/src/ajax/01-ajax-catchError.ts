const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const fetchPromesa = fetch(url);
/* fetchPromesa
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.warn("error en usuarios", err)); */

/* fetchPromesa
  .then(manejaErrores)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.warn("error en usuarios", err)); */

import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { map, pluck, catchError } from "rxjs/operators";

const atrapaError = (err: AjaxError) => {
  console.warn("Error en:", err.message);
  return of([]);
};

ajax(url)
  .pipe(pluck("response"), catchError(atrapaError))
  // map( (resp) => resp.response)
  .subscribe((users) => console.log("Usuarios: ", users));
