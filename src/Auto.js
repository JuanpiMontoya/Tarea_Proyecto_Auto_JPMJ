class auto{
    constructor(){
        this.dimX = 0
        this.dimY = 0
        this.coordX = 0
        this.coordY = 0
        this.direccion = ""
        this.posIni = ""
        this.movimientos = ""
    }

    getDimX(){
        return this.dimX
    }

    setDimX(dimensionX){
        this.dimX = +dimensionX
    }

    getDimY(){
        return this.dimY
    }

    setDimY(dimensionY){
        this.dimY = +dimensionY
    }

    getCoordX(){
        return this.coordX
    }

    setCoordX(coordenadaX){
        this.coordX = +coordenadaX
    }

    getCoordY(){
        return this.coordY
    }

    setCoordY(coordenadaY){
        this.coordY = +coordenadaY
    }

    getDireccion(){
        return this.direccion
    }

    setDireccion(dir){
        this.direccion = dir
    }

    getPosIni(){
        return this.posIni
    }

    setPosIni(posInicial){
        this.posIni = posInicial
    }

    getMovimientos(){
        return this.movimientos
    }

    setMovimientos(movs){
        this.movimientos = movs
    }

    PosicionInicial(posInicial) {
        var dir = posInicial.slice(-1);
        var coordsIni = posInicial.match(/(\d+)\,(\d+)/);
        if(dir == 'N' || dir == 'S' || dir == 'E' || dir == 'O')
        {
            if (coordsIni)
            {
                //Se dividieron las coordenadas iniciales y asignamos sus valores respectivos
                this.setCoordX(coordsIni[1])
                this.setCoordY(coordsIni[2])
                this.setDireccion(dir)
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

    DimensionesyPos_Inicial(comandos_auto)
    {
        var Comando_Ing ,dimensiones,valDim;
        Comando_Ing = comandos_auto.split("/");
        //Dividimos las dimensiones de la superficie y la posicion inicial del auto
        dimensiones = Comando_Ing[0];
        this.setPosIni(Comando_Ing[1])
        //Separamos los valores X y Y de las dimensiones de la superficie y asignamos sus valores respectivos
        valDim = dimensiones.match(/(\d+)\,(\d+)/);
        this.setDimX(valDim[1]) 
        this.setDimY(valDim[2])
        //Verificamos los valores X y Y de la posicion inicial con las dimensiones dadas
        if(valDim && this.PosicionInicial(this.getPosIni()) == true)
        {
            if(this.getDimX() >= this.getCoordX() && this.getDimY() >= this.getCoordY())
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }

    verComando_Completo(comandos_auto_completo)
    {
        //Dividimos el comando para el inicio del auto y sus comandos de movimiento verificando si esta escrito correctamente
        var Comando_Movs,Inicio_Auto,Division_Ini,Division_Mov;
        Division_Ini = comandos_auto_completo.indexOf('/');
        Division_Mov = comandos_auto_completo.indexOf('/', Division_Ini + 1);
        if (Division_Mov !== -1) 
        {
            Inicio_Auto = comandos_auto_completo.substring(0,Division_Mov);
            Comando_Movs = comandos_auto_completo.substring( Division_Mov + 1);
            if(this.DimensionesyPos_Inicial(Inicio_Auto) == true)
            {
                var letrasComando = /^[IAD]+$/;
                if (letrasComando.test(Comando_Movs) && Comando_Movs.length <=30) 
                {
                    this.setMovimientos(Comando_Movs)
                    return true;
                } 
                else 
                {
                    return false;
                }
            }
        } 
        else 
        {
            return false;
        }
            
    }

    cambiarDir_Auto(dir,movimientos_auto)
    {
        let nueva_dir = '';
        //Hacemos un ciclo while cambiando la direccion del auto en base a cada comando de movimiento ingresado
        var cont = 0;
        while (cont < movimientos_auto.length) {
            var comando = movimientos_auto.charAt(cont);
            switch(comando)
            {
                //Si ingreso I (Izquierda) 
                case "I":
                    switch(dir)
                    {
                        case "N":
                          nueva_dir = 'E';
                          break;
                        case "S":
                          nueva_dir = 'O';
                          break;
                        case "E":
                          nueva_dir = 'N';
                          break;
                        case "O":
                          nueva_dir = 'S';
                          break;
                      }
                  break;
                case "D":
                    switch(dir)
                    {
                        case "N":
                          nueva_dir = 'O';
                          break;
                        case "S":
                          nueva_dir = 'E';
                          break;
                        case "E":
                          nueva_dir = 'S';
                          break;
                        case "O":
                          nueva_dir = 'N';
                          break;
                      }
                  break;
              }
            dir = nueva_dir
            this.setDireccion(nueva_dir)
            cont++;
        }
        return nueva_dir;
    }
}
export default auto;