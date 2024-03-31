//Datos del BCRA
//https://www.bcra.gob.ar/PublicacionesEstadisticas/Principales_variables_datos.asp?serie=7988&detalle=%CDndice%20para%20Contratos%20de%20Locaci%F3n%20
//(ICL-Ley%2027.551

let datos = {
  "A2023-01-01": 185.32,
  "A2023-02-01": 194.89,
  "A2023-03-01": 205.12,
  "A2023-04-01": 218.72,
  "A2023-05-01": 232.96,
  "A2023-06-01": 253.28,
  "A2023-07-01": 273.44,
  "A2023-08-01": 292.58,
  "A2023-09-01": 310.58,
  "A2023-10-01": 337.84,
  "A2023-11-01": 382.46,
  "A2023-12-01": 421.72,
  "A2024-01-01": 463.40,
  "A2024-02-01": 556.62,
  "A2024-03-01": 680.08,
  "A2024-04-01": 786.10
};

let anio1,
  anio2,
  mes1,
  mes2,
  dia1,
  dia2,
  precio1,
  precio2,
  fechaFormateada1,
  fechaFormateada2,
  valorFecha1,
  valorFecha2,
  renovacion,
  mostrarPrecio,
  porcentual;

function recuperarValor(valorBuscado) {
  return datos[valorBuscado];
}

function obtenerDatos() {
  //Fecha inicio
  dia1 = document.getElementById("dia1").value;
  mes1 = document.getElementById("mes1").value;
  anio1 = document.getElementById("anio1").value;
  fechaFormateada1 = `A${anio1}-${mes1}-${dia1}`;

  //Precio al inicio
  precio1 = document.getElementById("precio1").value;

  //Fecha renovación
  dia2 = document.getElementById("dia2").value;
  mes2 = document.getElementById("mes2").value;
  anio2 = document.getElementById("anio2").value;
  fechaFormateada2 = `A${anio2}-${mes2}-${dia2}`;

  valorFecha1 = recuperarValor(fechaFormateada1);
  valorFecha2 = recuperarValor(fechaFormateada2);

  renovacion = Math.round((precio1 / valorFecha1) * valorFecha2);
  porcentual = ((renovacion - precio1) / precio1) * 100;
  mostrarPrecio = document.getElementById("formulario__mensaje-precio2");

  mostrarPrecio.innerHTML = `<h4 style='font-size: 20px; text-align: center; color: #fafafa; background: rgb(171, 52, 52); margin-bottom: 40px; padding: 10px 20px; border-radius: 3px;'>
    Precio actualizado:<br>$ ${renovacion} (${porcentual.toFixed(
    2
  )}%)</h4><div class='formulario__grupo-btn-calcular'><button type='button' onclick='location.reload()' class='formulario__btn'>Borrar</button>
    <p id='formulario__mensaje-precio2'></p></div>`;
}
