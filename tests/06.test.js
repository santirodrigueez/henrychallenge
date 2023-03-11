const crearClaseMascota = require('../06-07-08.js');
  
describe("crearClaseMascota", function () {
  it("should return a pet constructor that correctly builds pet objects", function () {
    const Mascota = crearClaseMascota();
    const mascota = new Mascota(
      "Artemisa",
      { nombre: "Nicky", apellido: "Medina" },
      [
        { actividad: "salir a caminar", frecuencia: "1 vez al dia" },
        { actividad: "baño", frecuencia: "1 vez al mes" },
      ]
    );
    expect(mascota.nombre).toBe("Artemisa");
    expect(mascota.dueño).toEqual({ nombre: "Nicky", apellido: "Medina" });
    expect(mascota.actividades).toEqual([
      
        { actividad: "salir a caminar", frecuencia: "1 vez al dia" },
        { actividad: "baño", frecuencia: "1 vez al mes" },
      
    ]);
  });
  it(`should return the pet's name`, function () {
    const Mascota = crearClaseMascota();
    const mascota = new Mascota(
      "Artemisa",
      { nombre: "Nicky", apellido: "Medina" },
      [
        { actividad: "salir a caminar", frecuencia: "1 vez al dia" },
        { actividad: "baño", frecuencia: "1 vez al mes" },
      ]
    );
    expect(mascota.getNombre()).toBe("Artemisa");
  });
});