import { asyncScheduler } from "rxjs";

/*
  asyncScheduler, permite crear setTimeout y setInterval, pero utilizando una subcripción.
*/

//setTimeout(() => {}, 3000);
//setInterval(() => {}, 3000);

const saludar = () => console.log("Hola mundo");
const saludar2 = (nombre) => console.log(`Hola mundo ${nombre}`);
const saludar3 = (persona) =>
  console.log(`Hola mundo ${persona.nombre} ${persona.apellido}`);

//asyncScheduler.schedule(saludar, 3000);
//asyncScheduler.schedule(saludar2, 3000, "JGomez");
//asyncScheduler.schedule(saludar3, 3000, { nombre: "Juan", apellido: "Gómez" });

const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state: ", state);
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

/*setTimeout(() => {
  subs.unsubscribe();
}, 6000);*/

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
