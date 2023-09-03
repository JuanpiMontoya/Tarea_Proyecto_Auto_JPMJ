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
        if ( Division_Mov !== -1) 
        {
            Inicio_Auto = comandos_auto_completo.substring(0,Division_Mov);
            Comando_Movs = comandos_auto_completo.substring( Division_Mov + 1);
            if(this.DimensionesyPos_Inicial(Inicio_Auto) == true)
            {
                var letrasComando = /^[IAD]+$/;
                if (letrasComando.test(Comando_Movs)) 
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
}
export default auto;