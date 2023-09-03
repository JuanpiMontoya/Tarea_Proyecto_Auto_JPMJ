import auto from "./Auto"

const auto_pruebas = new auto();

describe("Autos", () => {
    it("El usuario puede ingresar la pos. inicial del auto", () => {
      expect(auto_pruebas.PosicionInicial('1,2N')).toEqual(true);
    });

    it("Verificar que la direccion que la posicion Inicial del usuario tenga un formato correcto", () => {
      expect(auto_pruebas.PosicionInicial('3,3R')).toEqual(false);
    });

    it("Verificar que las coordenadas de la posicion Inicial del usuario tenga un formato correcto", () => {
      expect(auto_pruebas.PosicionInicial('Y-6E')).toEqual(false);
    });

    it("Verificar que las coordenadas de la posicion Inicial sean correctas añadiendo las dimensiones de X y Y", () => {
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
});