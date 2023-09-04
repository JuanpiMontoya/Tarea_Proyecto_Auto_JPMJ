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

    // Gets y sets respectivos
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

    // Verificamos la posicion inicial
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

    // Verificamos la posicion inicial y sus dimensiones
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

    // Verificamos si todo el comando ingresado esta correcto
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

    // Modificamos el valor de la direccion
    mod_direccion(com_Dir,dir,cambio_dir)
    {
        switch(com_Dir)
        {
            //Si ingreso I (Izquierda) 
            case "I":
                switch(dir)
                {
                case "N":
                    cambio_dir = 'O';
                    break;
                case "S":
                    cambio_dir = 'E';
                    break;
                case "E":
                    cambio_dir = 'N';
                    break;
                case "O":
                    cambio_dir = 'S';
                    break;
                }
            break;
            //Si ingreso D (derecha) 
            case "D":
                switch(dir)
                {
                case "N":
                    cambio_dir = 'E';
                    break;
                case "S":
                    cambio_dir = 'O';
                    break;
                case "E":
                    cambio_dir = 'S';
                    break;
                case "O":
                    cambio_dir = 'N';
                    break;
                }
                break;
        }
        return cambio_dir
    }

    //Modificamos el valor de la posicion y la direccion
    mod_posicion_y_dir(coordX,coordY,dir,com)
    {
        let cambio_dir = '';
        switch(com)
        {
            //Si ingreso I (Izquierda) 
            case "A":
                switch(dir)
                {
                case "N":                    
                    console.log(this.getDimY())
                    console.log(coordY)
                    if(this.getDimY() >= coordY + 1)
                    {
                        console.log("Ingreso N")
                        coordY = coordY + 1
                    }                   
                    break;
                case "S":
                    if(coordY != 0)
                    {
                        coordY = coordY - 1
                    }
                    break;
                case "E":
                    coordX = coordX + 1
                    break;
                case "O":
                    coordX = coordX - 1
                    break;
                }
            break;
            case "I":  
            case "D":
                cambio_dir = this.mod_direccion(com, dir);
                dir = cambio_dir;
        }
        return { coordX, coordY, dir };
    }

    //Funcion con la que cambiamos la direccion del auto
    cambiarDir_Auto(dir,movimientos_auto)
    {
        let nueva_dir = '';
        //Hacemos un ciclo while cambiando la direccion del auto en base a cada comando de movimiento ingresado
        var cont = 0;
        while (cont < movimientos_auto.length) {
            var comando = movimientos_auto.charAt(cont);
            dir = this.mod_direccion(comando,dir,nueva_dir);
            this.setDireccion(nueva_dir);
            cont++;
        }
        return dir;
    }

    //Funcion con la que cambiamos la posicion y direccion del auto
    cambiarPos_Auto(coordX,coordY,dir,movimientos_auto)
    {
        //Hacemos un ciclo while cambiando la posicion y direccion del auto en base a cada comando de movimiento ingresado
        var cont = 0;
        while (cont < movimientos_auto.length) {
            var comando = movimientos_auto.charAt(cont);
            var cambio_Auto = this.mod_posicion_y_dir(coordX,coordY,dir,comando);
            coordX = cambio_Auto.coordX;
            coordY = cambio_Auto.coordY;
            dir = cambio_Auto.dir;
            cont++;
        }
        return coordX + "," + coordY + dir;
    }
}
export default auto;