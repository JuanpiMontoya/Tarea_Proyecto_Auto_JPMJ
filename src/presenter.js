import valPosicionInicial from "./Auto"

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#auto-form");
const posInicial = document.querySelector("#pos-inicial");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(valPosicionInicial(comandos.value) == true)
  {
    posInicial.textContent = comandos.value
  }
  else
  {
    alert("Error al ingresar el valor de la posicion Inicial");
    comandos.value = ''
  }
});
