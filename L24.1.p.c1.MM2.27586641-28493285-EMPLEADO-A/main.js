import { Empresa } from './Empresa.js';
import { Empleado } from './empleado.js';

// Crear objeto Empresa
let empresa = new Empresa();

// Agregar empleados
empresa.agregarEmpleado(new Empleado("Juan", "obrero", 100));
empresa.agregarEmpleado(new Empleado("Lin", "administrativo", 200));
empresa.agregarEmpleado(new Empleado("Mary", "obrero", 50));
empresa.agregarEmpleado(new Empleado("Ana", "obrero", 50));
empresa.agregarEmpleado(new Empleado("Carlos", "administrativo", 150));

// Obtener resultados
let empleadoConMenorSalario = empresa.obtenerEmpleadoConMenorSalario();
let promedioSalarioAdministrativos = empresa.obtenerPromedioSalarioAdministrativos();

// Mostrar resultados en HTML
document.getElementById('salida').innerHTML = `
  <h2>Resultados</h2>
  <p>Uno de los que gana menos: ${empleadoConMenorSalario.nombre}</p>
  <p>El salario promedio de los administrativos es: ${promedioSalarioAdministrativos}</p>
`;