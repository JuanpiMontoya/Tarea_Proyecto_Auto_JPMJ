import funciones_auto from "./Auto"

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#auto-form");
const posInicial = document.querySelector("#pos-inicial");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(funciones_auto.valDimensionesyPos_Inicial(comandos.value) == true)
  {
    ComandoAuto = comandos.value.split("/");
    //Dividimos el comando y mostramos la posicion inicial
    posIni = ComandoAuto[1];
    posInicial.textContent = posIni
  }
  else
  {
    alert("Error al ingresar el valor de la posicion Inicial");
    comandos.value = ''
  }
});
