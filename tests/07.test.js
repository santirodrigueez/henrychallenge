const crearClaseMascota = require('../06-07-08.js');
  
describe("crearClaseMascota", function () {
  it(`should return the pet's owner`, function () {
    const Mascota = crearClaseMascota();
    const mascota = new Mascota(
      "Artemisa",
      { nombre: "Nicky", apellido: "Medina" },
      [
        { actividad: "salir a caminar", frecuencia: "1 vez al dia" },
        { actividad: "baño", frecuencia: "1 vez al mes" },
      ]
    );
    expect(mascota.getDueño()).toBe("Nicky Medina");
  });
  it("should add a new activity", function () {
    const Mascota = crearClaseMascota();
    const mascota = new Mascota(
      "Artemisa",
      { nombre: "Nicky", apellido: "Medina" },
      [
        { actividad: "salir a caminar", frecuencia: "1 vez al dia" },
        { actividad: "baño", frecuencia: "1 vez al mes" },
      ]
    );
    mascota.addActividad("dormir", "18 horas al dia");
    expect(mascota.actividades[2]).toEqual({
      actividad: "dormir",
      frecuencia: "18 horas al dia",
    });
  });
});