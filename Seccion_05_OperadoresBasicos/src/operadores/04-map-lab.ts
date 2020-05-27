import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex tortor, pretium eu dui in, semper gravida elit. Cras at purus faucibus, malesuada dolor eu, efficitur arcu. Sed ac risus eget felis laoreet elementum. Etiam suscipit nisl neque, a commodo sapien porttitor eget. Etiam sed sapien quis orci venenatis fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris bibendum rutrum mauris nec vestibulum. Duis condimentum ornare sagittis. Cras finibus arcu nec est tincidunt, a cursus libero lacinia. Proin volutpat, orci non facilisis dictum, felis turpis commodo ligula, vitae malesuada felis nulla eget dolor. Fusce in finibus mauris, fringilla lacinia ex. Morbi facilisis orci sed nunc aliquam, eget sagittis nulla scelerisque. Maecenas eu eleifend odio, a aliquam sem. Sed quis ullamcorper nunc.
<br/><br/>
Praesent semper congue tristique. Nam venenatis mi eget fermentum porta. Praesent aliquet feugiat nisi, sit amet fermentum velit sodales et. Phasellus quis turpis ullamcorper, placerat nisi vitae, viverra mauris. Vestibulum et massa quis lorem facilisis iaculis sed et massa. Maecenas a nisi eget nibh lacinia viverra. Morbi pretium ligula neque, quis volutpat dolor consectetur eget. Phasellus feugiat rutrum hendrerit. Quisque sodales congue euismod. Aenean vehicula ante et lacus iaculis euismod. Aenean suscipit efficitur ante. Donec interdum interdum pharetra. Nunc est quam, interdum quis erat vitae, dictum pellentesque arcu. Sed eget felis rutrum, dictum arcu quis, finibus sem.
<br/><br/>
Donec a tortor quis diam semper condimentum vitae in lectus. Suspendisse iaculis eros at ligula feugiat, at tempus ipsum feugiat. Duis id ex molestie, pharetra lacus vitae, sodales est. Morbi feugiat tempor enim, vel gravida odio ultrices vel. Nam in ante ut tellus scelerisque faucibus sed at turpis. Donec vitae risus rhoncus, rutrum nisi vitae, egestas ipsum. Quisque accumsan ultricies leo ut aliquam. Nulla fringilla enim a diam posuere, ac bibendum turpis varius. Curabitur ultrices nulla eu ante eleifend tristique. Duis quis malesuada mauris. In finibus placerat pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut eu congue augue. Mauris ornare accumsan enim.
<br/><br/>
Nam ultrices ligula vel tincidunt porta. Maecenas sit amet tincidunt neque, maximus porttitor dolor. Donec non purus risus. Proin mattis, libero vitae bibendum fermentum, sapien mauris imperdiet erat, eu condimentum urna urna ac quam. Vivamus malesuada finibus sollicitudin. Nulla placerat lobortis enim ut aliquet. Integer tempus neque sed iaculis molestie. Quisque cursus maximus magna, sit amet accumsan nibh ultrices quis.
<br/><br/>
Pellentesque in neque ac arcu placerat tincidunt. Quisque consequat, turpis quis luctus efficitur, diam enim lobortis est, id faucibus ante nibh id sem. Praesent mollis egestas arcu, sit amet tincidunt nisl porta sit amet. Vestibulum nibh elit, interdum sed mi ut, iaculis eleifend dui. Sed non turpis finibus, imperdiet lectus eu, sodales erat. Donec aliquam mi eget orci ornare, in sagittis odio pellentesque. In sit amet magna felis. Maecenas at nunc orci. Ut viverra tortor vitae efficitur mattis. 
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex tortor, pretium eu dui in, semper gravida elit. Cras at purus faucibus, malesuada dolor eu, efficitur arcu. Sed ac risus eget felis laoreet elementum. Etiam suscipit nisl neque, a commodo sapien porttitor eget. Etiam sed sapien quis orci venenatis fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris bibendum rutrum mauris nec vestibulum. Duis condimentum ornare sagittis. Cras finibus arcu nec est tincidunt, a cursus libero lacinia. Proin volutpat, orci non facilisis dictum, felis turpis commodo ligula, vitae malesuada felis nulla eget dolor. Fusce in finibus mauris, fringilla lacinia ex. Morbi facilisis orci sed nunc aliquam, eget sagittis nulla scelerisque. Maecenas eu eleifend odio, a aliquam sem. Sed quis ullamcorper nunc.
<br/><br/>
Praesent semper congue tristique. Nam venenatis mi eget fermentum porta. Praesent aliquet feugiat nisi, sit amet fermentum velit sodales et. Phasellus quis turpis ullamcorper, placerat nisi vitae, viverra mauris. Vestibulum et massa quis lorem facilisis iaculis sed et massa. Maecenas a nisi eget nibh lacinia viverra. Morbi pretium ligula neque, quis volutpat dolor consectetur eget. Phasellus feugiat rutrum hendrerit. Quisque sodales congue euismod. Aenean vehicula ante et lacus iaculis euismod. Aenean suscipit efficitur ante. Donec interdum interdum pharetra. Nunc est quam, interdum quis erat vitae, dictum pellentesque arcu. Sed eget felis rutrum, dictum arcu quis, finibus sem.
<br/><br/>
Donec a tortor quis diam semper condimentum vitae in lectus. Suspendisse iaculis eros at ligula feugiat, at tempus ipsum feugiat. Duis id ex molestie, pharetra lacus vitae, sodales est. Morbi feugiat tempor enim, vel gravida odio ultrices vel. Nam in ante ut tellus scelerisque faucibus sed at turpis. Donec vitae risus rhoncus, rutrum nisi vitae, egestas ipsum. Quisque accumsan ultricies leo ut aliquam. Nulla fringilla enim a diam posuere, ac bibendum turpis varius. Curabitur ultrices nulla eu ante eleifend tristique. Duis quis malesuada mauris. In finibus placerat pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut eu congue augue. Mauris ornare accumsan enim.
<br/><br/>
Nam ultrices ligula vel tincidunt porta. Maecenas sit amet tincidunt neque, maximus porttitor dolor. Donec non purus risus. Proin mattis, libero vitae bibendum fermentum, sapien mauris imperdiet erat, eu condimentum urna urna ac quam. Vivamus malesuada finibus sollicitudin. Nulla placerat lobortis enim ut aliquet. Integer tempus neque sed iaculis molestie. Quisque cursus maximus magna, sit amet accumsan nibh ultrices quis.
<br/><br/>
Pellentesque in neque ac arcu placerat tincidunt. Quisque consequat, turpis quis luctus efficitur, diam enim lobortis est, id faucibus ante nibh id sem. Praesent mollis egestas arcu, sit amet tincidunt nisl porta sit amet. Vestibulum nibh elit, interdum sed mi ut, iaculis eleifend dui. Sed non turpis finibus, imperdiet lectus eu, sodales erat. Donec aliquam mi eget orci ornare, in sagittis odio pellentesque. In sit amet magna felis. Maecenas at nunc orci. Ut viverra tortor vitae efficitur mattis. 
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex tortor, pretium eu dui in, semper gravida elit. Cras at purus faucibus, malesuada dolor eu, efficitur arcu. Sed ac risus eget felis laoreet elementum. Etiam suscipit nisl neque, a commodo sapien porttitor eget. Etiam sed sapien quis orci venenatis fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris bibendum rutrum mauris nec vestibulum. Duis condimentum ornare sagittis. Cras finibus arcu nec est tincidunt, a cursus libero lacinia. Proin volutpat, orci non facilisis dictum, felis turpis commodo ligula, vitae malesuada felis nulla eget dolor. Fusce in finibus mauris, fringilla lacinia ex. Morbi facilisis orci sed nunc aliquam, eget sagittis nulla scelerisque. Maecenas eu eleifend odio, a aliquam sem. Sed quis ullamcorper nunc.
<br/><br/>
Praesent semper congue tristique. Nam venenatis mi eget fermentum porta. Praesent aliquet feugiat nisi, sit amet fermentum velit sodales et. Phasellus quis turpis ullamcorper, placerat nisi vitae, viverra mauris. Vestibulum et massa quis lorem facilisis iaculis sed et massa. Maecenas a nisi eget nibh lacinia viverra. Morbi pretium ligula neque, quis volutpat dolor consectetur eget. Phasellus feugiat rutrum hendrerit. Quisque sodales congue euismod. Aenean vehicula ante et lacus iaculis euismod. Aenean suscipit efficitur ante. Donec interdum interdum pharetra. Nunc est quam, interdum quis erat vitae, dictum pellentesque arcu. Sed eget felis rutrum, dictum arcu quis, finibus sem.
<br/><br/>
Donec a tortor quis diam semper condimentum vitae in lectus. Suspendisse iaculis eros at ligula feugiat, at tempus ipsum feugiat. Duis id ex molestie, pharetra lacus vitae, sodales est. Morbi feugiat tempor enim, vel gravida odio ultrices vel. Nam in ante ut tellus scelerisque faucibus sed at turpis. Donec vitae risus rhoncus, rutrum nisi vitae, egestas ipsum. Quisque accumsan ultricies leo ut aliquam. Nulla fringilla enim a diam posuere, ac bibendum turpis varius. Curabitur ultrices nulla eu ante eleifend tristique. Duis quis malesuada mauris. In finibus placerat pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut eu congue augue. Mauris ornare accumsan enim.
<br/><br/>
Nam ultrices ligula vel tincidunt porta. Maecenas sit amet tincidunt neque, maximus porttitor dolor. Donec non purus risus. Proin mattis, libero vitae bibendum fermentum, sapien mauris imperdiet erat, eu condimentum urna urna ac quam. Vivamus malesuada finibus sollicitudin. Nulla placerat lobortis enim ut aliquet. Integer tempus neque sed iaculis molestie. Quisque cursus maximus magna, sit amet accumsan nibh ultrices quis.
<br/><br/>
Pellentesque in neque ac arcu placerat tincidunt. Quisque consequat, turpis quis luctus efficitur, diam enim lobortis est, id faucibus ante nibh id sem. Praesent mollis egestas arcu, sit amet tincidunt nisl porta sit amet. Vestibulum nibh elit, interdum sed mi ut, iaculis eleifend dui. Sed non turpis finibus, imperdiet lectus eu, sodales erat. Donec aliquam mi eget orci ornare, in sagittis odio pellentesque. In sit amet magna felis. Maecenas at nunc orci. Ut viverra tortor vitae efficitur mattis. 
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex tortor, pretium eu dui in, semper gravida elit. Cras at purus faucibus, malesuada dolor eu, efficitur arcu. Sed ac risus eget felis laoreet elementum. Etiam suscipit nisl neque, a commodo sapien porttitor eget. Etiam sed sapien quis orci venenatis fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris bibendum rutrum mauris nec vestibulum. Duis condimentum ornare sagittis. Cras finibus arcu nec est tincidunt, a cursus libero lacinia. Proin volutpat, orci non facilisis dictum, felis turpis commodo ligula, vitae malesuada felis nulla eget dolor. Fusce in finibus mauris, fringilla lacinia ex. Morbi facilisis orci sed nunc aliquam, eget sagittis nulla scelerisque. Maecenas eu eleifend odio, a aliquam sem. Sed quis ullamcorper nunc.
<br/><br/>
Praesent semper congue tristique. Nam venenatis mi eget fermentum porta. Praesent aliquet feugiat nisi, sit amet fermentum velit sodales et. Phasellus quis turpis ullamcorper, placerat nisi vitae, viverra mauris. Vestibulum et massa quis lorem facilisis iaculis sed et massa. Maecenas a nisi eget nibh lacinia viverra. Morbi pretium ligula neque, quis volutpat dolor consectetur eget. Phasellus feugiat rutrum hendrerit. Quisque sodales congue euismod. Aenean vehicula ante et lacus iaculis euismod. Aenean suscipit efficitur ante. Donec interdum interdum pharetra. Nunc est quam, interdum quis erat vitae, dictum pellentesque arcu. Sed eget felis rutrum, dictum arcu quis, finibus sem.
<br/><br/>
Donec a tortor quis diam semper condimentum vitae in lectus. Suspendisse iaculis eros at ligula feugiat, at tempus ipsum feugiat. Duis id ex molestie, pharetra lacus vitae, sodales est. Morbi feugiat tempor enim, vel gravida odio ultrices vel. Nam in ante ut tellus scelerisque faucibus sed at turpis. Donec vitae risus rhoncus, rutrum nisi vitae, egestas ipsum. Quisque accumsan ultricies leo ut aliquam. Nulla fringilla enim a diam posuere, ac bibendum turpis varius. Curabitur ultrices nulla eu ante eleifend tristique. Duis quis malesuada mauris. In finibus placerat pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut eu congue augue. Mauris ornare accumsan enim.
<br/><br/>
Nam ultrices ligula vel tincidunt porta. Maecenas sit amet tincidunt neque, maximus porttitor dolor. Donec non purus risus. Proin mattis, libero vitae bibendum fermentum, sapien mauris imperdiet erat, eu condimentum urna urna ac quam. Vivamus malesuada finibus sollicitudin. Nulla placerat lobortis enim ut aliquet. Integer tempus neque sed iaculis molestie. Quisque cursus maximus magna, sit amet accumsan nibh ultrices quis.
<br/><br/>
Pellentesque in neque ac arcu placerat tincidunt. Quisque consequat, turpis quis luctus efficitur, diam enim lobortis est, id faucibus ante nibh id sem. Praesent mollis egestas arcu, sit amet tincidunt nisl porta sit amet. Vestibulum nibh elit, interdum sed mi ut, iaculis eleifend dui. Sed non turpis finibus, imperdiet lectus eu, sodales erat. Donec aliquam mi eget orci ornare, in sagittis odio pellentesque. In sit amet magna felis. Maecenas at nunc orci. Ut viverra tortor vitae efficitur mattis. 
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// Streams
const scroll$ = fromEvent(document, "scroll");
scroll$.subscribe(console.log);

const calcularProcentajeScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const progress$ = scroll$.pipe(
  map((event) => calcularProcentajeScroll(event)),
  tap(console.log)
);

progress$.subscribe((porc) => {
  progressBar.style.width = `${porc}%`;
});
