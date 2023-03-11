/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClaseMascota() {
  class Mascota {
    constructor(nombre, dueño, actividades) {
      // El constructor de la clase Mascota recibe nombre (string), dueño (objeto), actividades (array de objetos)
      // ej:
      //[{actividad: 'salir a caminar', frecuencia: '1 vez al dia'}, {actividad: 'baño', frecuencia: '1 vez al mes'}]
      // Inicializar las propiedades de la mascota con los valores recibidos como argumento
      // Tu código aca:
      this.nombre = nombre;
      this.dueño = dueño;
      this.actividades = actividades;
    }

    getNombre() {
      // este método debe retornar el nombre de la mascota.
      // Tu código aca:
      return this.nombre;
    }

    getDueño() {
      // El método debe retornar nombre y apellido del dueño (concatenados).
      // Tu código aca:
      return this.dueño.nombre + " " + this.dueño.apellido;
    }

    addActividad(actividad, frecuencia) {
      // El método recibe un string 'actividad' y otro string 'frecuencia'  y debe agregarlo al arreglo de actividades de la mascota.
      // No debe retornar nada.
      // Tu código aca:
      this.actividades.push({ actividad: actividad, frecuencia: frecuencia });
    }

    getActividades() {
      // El método debe retornar un arreglo con sólo las actividades de las mascotas.
      // Ej:
      // [{actividad: 'salir a caminar', frecuencia: '1 vez al dia'}, {actividad: 'baño', frecuencia: '1 vez al mes'}]
      // mascotas.getActividades() debería devolver ['salir a caminar, 'baño']
      // Tu código aca:
      return this.actividades.map((act) => act.actividad);
    }

    getFrecuencia(actividad) {
      // El metodo debe retornar la frecuencia de dicha actividad
      // ej:
      // [{actividad: 'salir a caminar', frecuencia: '1 vez al dia'}, {actividad: 'baño', frecuencia: '1 vez al mes'}]
      // mascotas.getFrecuencia('baño') debería devolver '1 vez al mes'
      // Tu código aca:
      return this.actividades.find((act) => act.actividad === actividad)
        .frecuencia;
    }
  }

  return Mascota;
}

// No modifiques nada debajo de esta linea //

module.exports = crearClaseMascota