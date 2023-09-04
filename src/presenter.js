import auto from "./Auto"

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#auto-form");
const posInicial = document.querySelector("#pos-inicial");
const comandos_mov = document.querySelector("#comandos-ing");
const posFinal = document.querySelector("#pos-final");
const auto_Proyecto = new auto();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(auto_Proyecto.verComando_Completo(comandos.value) == true)
  {
    ComandoAuto = comandos.value.split("/");
    //Dividimos el comando y mostramos la posicion inicial
    posInicial.textContent = auto_Proyecto.getPosIni();
    comandos_mov.textContent = auto_Proyecto.getMovimientos();
    posFinal.textContent = auto_Proyecto.getCoordX() + "," + auto_Proyecto.getCoordY() + auto_Proyecto.cambiarDir_Auto(auto_Proyecto.getDireccion(),auto_Proyecto.getMovimientos());
  }
  else
  {
    alert("Error al ingresar el valor de la posicion Inicial");
    comandos.value = ''
  }
});
