function valPosicionInicial(posIni) {
    var dir = posIni.slice(-1);
    var coordsIni = posIni.match(/(\d+)\,(\d+)/);
    if(dir == 'N' || dir == 'S' || dir == 'E' || dir == 'O')
    {
        if (coordsIni)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
  }

  function valDimensionesyPos_Inicial(comando_Inicio_auto)
  {
    var ComandoUsu,dimensiones,posIni,valDim,dimX,dimY,coordsIni,coordX,coordY;
    ComandoUsu = comando_Inicio_auto.split("/");
    //Dividimos las dimensiones de la superficie y la posicion inicial del auto
    dimensiones = ComandoUsu[0];
    posIni = ComandoUsu[1];
    //Separamos los valores X y Y de las dimensiones de la superficie
    valDim = dimensiones.match(/(\d+)\,(\d+)/);
    dimX = valDim[1];
    dimY = valDim[2];
    //Verificamos los valores X y Y de la posicion inicial con las dimensiones dadas
    if(valDim && valPosicionInicial(posIni) == true)
    {
        coordsIni = posIni.match(/(\d+)\,(\d+)/);
        coordX = coordsIni[1];
        coordY = coordsIni[2];
        if(coordX <= dimX && coordY <= dimY )
        {
            return true;
        }
        else
        {
            return false;
        }
    }
  }

  const funciones_auto = {valPosicionInicial,valDimensionesyPos_Inicial};

  export default funciones_auto;