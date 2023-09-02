function valPosicionInicial(posIni) {
    var dir = posIni.slice(-1);
    if(dir == 'N' || dir == 'S' || dir == 'E' || dir == 'O')
    {
        return true;
    }
    else
    {
        return false;
    }
  }
  export default valPosicionInicial;