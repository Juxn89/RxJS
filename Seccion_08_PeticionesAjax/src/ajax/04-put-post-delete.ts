import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";
//ajax.get(url)
// ajax
//   .post(
//     url,
//     {
//       id: 1,
//       nombre: "juan",
//     },
//     {
//       "mi-toke": "ABC123",
//     }
//   )
//   .subscribe(console.log);

/* ajax
  .put(
    url,
    {
      id: 1,
      nombre: "juan",
    },
    {
      "mi-toke": "ABC123",
    }
  )
  .subscribe(console.log); */

ajax({
  url,
  method: "POST",
  headers: {
    "mi-token": "ASD123",
  },
  body: {
    id: 1,
    nombre: "JGomez",
  },
}).subscribe(console.log);
