const crearClaseMascota = require('../06-07-08.js');
  
describe("crearClaseMascota", function () {
  it("should get all the activities of the pet", function () {
    const Mascota = crearClaseMascota();
    const mascota = new Mascota(
      "Artemisa",
      { nombre: "Nicky", apellido: "Medina" },
      [
        { actividad: "salir a caminar", frecuencia: "1 vez al dia" },
        { actividad: "baño", frecuencia: "1 vez al mes" },
      ]
    );
    expect(mascota.getActividades()).toEqual([
      "salir a caminar",
      "baño",
    ]);
  });
  it("should get the frequency of the activity", function () {
    const Mascota = crearClaseMascota();
    const mascota = new Mascota(
      "Artemisa",
      { nombre: "Nicky", apellido: "Medina" },
      [
        { actividad: "salir a caminar", frecuencia: "1 vez al dia" },
        { actividad: "baño", frecuencia: "1 vez al mes" },
      ]
    );
    expect(mascota.getFrecuencia("salir a caminar")).toBe("1 vez al dia");
  });
});