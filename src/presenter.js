import valPosicionInicial from "./Auto"

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#auto-form");
const posInicial = document.querySelector("#pos-inicial");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  posInicial.textContent = comandos.value
});
