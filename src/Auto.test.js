import funciones_auto from "./Auto"

describe("Autos", () => {
    it("El usuario puede ingresar la pos. inicial del auto", () => {
      expect(funciones_auto.valPosicionInicial('1,2N')).toEqual(true);
    });

    it("Verificar que la direccion que la posicion Inicial del usuario tenga un formato correcto", () => {
      expect(funciones_auto.valPosicionInicial('3,3R')).toEqual(false);
    });

    it("Verificar que las coordenadas de la posicion Inicial del usuario tenga un formato correcto", () => {
      expect(funciones_auto.valPosicionInicial('Y-6E')).toEqual(false);
    });

    it("Verificar que las coordenadas de la posicion Inicial sean correctas añadiendo las dimensiones de X y Y", () => {
      expect(funciones_auto.valDimensionesyPos_Inicial('8,5/23,9O')).toEqual(false);
    });
});