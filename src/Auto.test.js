import valPosicionInicial from "./Auto"

describe("Autos", () => {
    it("El usuario puede ingresar la pos. inicial del auto", () => {
      expect(valPosicionInicial('1,2N')).toEqual(true);
    });
});