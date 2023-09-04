import auto from "./Auto"

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#auto-form");
const posInicial = document.querySelector("#pos-inicial");
const comandos_mov = document.querySelector("#comandos-ing");
const posFinal = document.querySelector("#pos-final");
const auto_Proyecto = new auto();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //Se verifica que el comando ingresado este correcto
  if(auto_Proyecto.verComando_Completo(comandos.value) == true)
  {
    //Colocamos el valor de la posicion inicial
    posInicial.textContent = auto_Proyecto.getPosIni();
    //Colocamos el valor de los comandos de movimiento
    comandos_mov.textContent = auto_Proyecto.getMovimientos();
    //Colocamos el valor de la posicion final
    posFinal.textContent = auto_Proyecto.cambiarPos_Auto(auto_Proyecto.getCoordX(),auto_Proyecto.getCoordY(),auto_Proyecto.getDireccion(),comandos.value);
  }
  else
  {
    alert("Error al ingresar el valor de la posicion Inicial");
    comandos.value = ''
  }
});
