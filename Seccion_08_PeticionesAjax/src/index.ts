const url = "https://api.github.com/usersXXX?per_page=5";

const fetchPromesa = fetch(url);
fetchPromesa
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.warn("error en usuarios", err));
