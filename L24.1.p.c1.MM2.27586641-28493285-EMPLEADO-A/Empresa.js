import { Empleado } from './empleado.js';

export class Empresa {
  constructor() {
    this.empleados = [];
  }

  agregarEmpleado(empleado) {
    this.empleados.push(empleado);
  }

  obtenerEmpleadoConMenorSalario() {
    let empleadoConMenorSalario = null;
    let salarioMinimo = Infinity;

    for (let i = 0; i < this.empleados.length; i++) {
      let empleadoActual = this.empleados[i];
      if (empleadoActual.salario < salarioMinimo) {
        salarioMinimo = empleadoActual.salario;
        empleadoConMenorSalario = empleadoActual;
      }
    }

    return empleadoConMenorSalario;
  }

  obtenerPromedioSalarioAdministrativos() {
    let sumaSalariosAdministrativos = 0;
    let cantidadAdministrativos = 0;

    for (let i = 0; i < this.empleados.length; i++) {
      let empleadoActual = this.empleados[i];
      if (empleadoActual.puesto === "administrativo") {
        sumaSalariosAdministrativos += empleadoActual.salario;
        cantidadAdministrativos++;
      }
    }

    if (cantidadAdministrativos > 0) {
      return sumaSalariosAdministrativos / cantidadAdministrativos;
    } else {
      return 0;
    }
  }
}