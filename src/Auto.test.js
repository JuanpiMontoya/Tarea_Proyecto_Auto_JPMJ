import auto from "./Auto"

const auto_pruebas = new auto();

describe("Autos", () => {
    it("El usuario puede ingresar la posicion inicial del auto", () => {
      expect(auto_pruebas.PosicionInicial('1,2N')).toEqual(true);
    });

    it("Verificar que la dirección que la posición Inicial del usuario tenga un formato correcto", () => {
      expect(auto_pruebas.PosicionInicial('3,3R')).toEqual(false);
    });

    it("Verificar que las coordenadas de la posición Inicial del usuario tenga un formato correcto", () => {
      expect(auto_pruebas.PosicionInicial('Y-6E')).toEqual(false);
    });

    it("Verificar que las coordenadas de la posición Inicial sean correctas añadiendo las dimensiones de X y Y", () => {
      expect(auto_pruebas.DimensionesyPos_Inicial('8,5/23,9O')).toEqual(false);
    });

    it("Verificar que los cambios al proyecto al volverlo una clase y devolver sus atributos esten correctos", () => {
      expect(auto_pruebas.DimensionesyPos_Inicial('10,10/3,5O')).toEqual(true);
      expect(auto_pruebas.getDimX()).toEqual(10);
      expect(auto_pruebas.getDimY()).toEqual(10);
      expect(auto_pruebas.getCoordX()).toEqual(3);
      expect(auto_pruebas.getCoordY()).toEqual(5);
      expect(auto_pruebas.getDireccion()).toEqual('O');
    });

    it("Verificar que los comandos del usuario acepten los movimientos del auto", () => {
      expect(auto_pruebas.verComando_Completo('10,10/3,5O/IAI')).toEqual(true);
    });

    it("Verificar que los comandos del usuario con los movimientos del auto tengan el formato correcto", () => {
      expect(auto_pruebas.verComando_Completo('10,10/3,5O/IAIXASXZ')).toEqual(false);
    });

    it("Verificar que el usuario no pueda escribir más de 30 comandos de movimiento", () => {
      expect(auto_pruebas.verComando_Completo('10,10/3,5O/IAIDDIIAIDAIAADDDIIAAIAAADIDIDAIDD')).toEqual(false);
    });

    it("Verificar que el comando de movimiento I (Izquierda) cambie la dirección del auto ", () => {
      expect(auto_pruebas.cambiarDir_Auto('N','IIIIIII')).toEqual('E');
    });

    it("Verificar que el comando de movimiento I (Izquierda) y Derecha (D) cambie la dirección del auto ", () => {
      expect(auto_pruebas.cambiarDir_Auto('E','IDIDD')).toEqual('S');
    });

    it("Verificar que el comando de movimiento A cambie las posiciones del auto", () => {
      expect(auto_pruebas.cambiarPos_Auto(1,2,'N','DAAAIAAI')).toEqual('4,4O');
    });

    it("Verificar que el comando de movimiento A cambie las posiciones del auto sin salir de las dimensiones Y", () => {
      expect(auto_pruebas.cambiarPos_Auto(1,2,'N','DDAAAAIAA')).toEqual('3,0E');
      expect(auto_pruebas.cambiarPos_Auto(2,8,'N','AAAADAA')).toEqual('4,10E');
    });

    it("Verificar que el comando de movimiento A cambie las posiciones del auto sin salir de las dimensiones X y Y", () => {
      expect(auto_pruebas.cambiarPos_Auto(1,2,'O','AAAAADDDAIAA')).toEqual('2,1E');
      expect(auto_pruebas.cambiarPos_Auto(8,2,'E','AAAAADAA')).toEqual('10,0S');
    });
});