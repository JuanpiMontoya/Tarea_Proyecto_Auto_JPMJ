import valPosicionInicial from "./Auto"

describe("Autos", () => {
    it("El usuario puede ingresar la pos. inicial del auto", () => {
      expect(valPosicionInicial('1,2N')).toEqual(true);
    });

    it("Verificar que la direccion que la posicion Inicial del usuario tenga un formato correcto", () => {
      expect(valPosicionInicial('3,3R')).toEqual(false);
    });

    it("Verificar que las coordenadas de la posicion Inicial del usuario tenga un formato correcto", () => {
      expect(valPosicionInicial('Y-6E')).toEqual(false);
    });
});