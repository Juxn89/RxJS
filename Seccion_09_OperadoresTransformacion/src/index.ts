import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, debounceTime, pluck } from "rxjs/operators";

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

const input$ = fromEvent<KeyboardEvent>(document, "keyup");

input$
  .pipe(
    debounceTime(500),
    map((event) => {
      const texto = event.target["value"];
      // return texto;
      return ajax.getJSON(`https://api.github.com/users/${texto}`);
    })
  )
  .subscribe((resp) => {
    resp.pipe(pluck("url")).subscribe(console.log);
  });
