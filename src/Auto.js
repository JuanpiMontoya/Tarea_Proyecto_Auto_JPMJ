function valPosicionInicial(posIni) {
    var dir = posIni.slice(-1);
    var coords = posIni.match(/(\d)\,(\d)/);
    console.log(coords)
    if(dir == 'N' || dir == 'S' || dir == 'E' || dir == 'O')
    {
        if (coords)
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
  export default valPosicionInicial;