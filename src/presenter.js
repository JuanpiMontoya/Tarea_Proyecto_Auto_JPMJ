import auto from "./Auto"

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#auto-form");
const posInicial = document.querySelector("#pos-inicial");
const auto_Proyecto = new auto();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(auto_Proyecto.DimensionesyPos_Inicial(comandos.value) == true)
  {
    ComandoAuto = comandos.value.split("/");
    //Dividimos el comando y mostramos la posicion inicial
    posInicial.textContent = auto_Proyecto.getPosIni();
  }
  else
  {
    alert("Error al ingresar el valor de la posicion Inicial");
    comandos.value = ''
  }
});
