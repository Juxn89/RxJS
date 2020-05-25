import { Observable, observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Siguiente [next]: ", value),
  error: (error) => console.warn("Siguiente [obs]: ", error),
  complete: () => console.info("completado [obs]"),
};
