import auto from "./Auto"

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#auto-form");
const posInicial = document.querySelector("#pos-inicial");
const superficie = document.querySelector("#superficie-auto");
const auto_Proyecto = new auto();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(auto_Proyecto.DimensionesyPos_Inicial(comandos.value) == true)
  {
    ComandoAuto = comandos.value.split("/");
    //Dividimos el comando y mostramos la posicion inicial
    posInicial.textContent = auto_Proyecto.getPosIni();
    for (var i = 0; i < auto_Proyecto.getDimY(); i++) 
    {
      for (var j = 0; j < auto_Proyecto.getDimX(); j++) 
      {
        const celda = document.createElement('div');
        celda.className = 'celda';
        celda.id= 'celda_ ' + i + '_' + j;
        celda.textContent = 'Elemento ' + i + '_' + j;
        celda.style.display = 'inline-block';
        superficie.appendChild(celda);        
      }
      const salto = document.createElement('br');
      superficie.appendChild(salto);
    }
  }
  else
  {
    alert("Error al ingresar el valor de la posicion Inicial");
    comandos.value = ''
  }
});
