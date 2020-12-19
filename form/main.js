///////// Ver Valor

document.querySelector("#valor").value;

function verValor() {
  let valor = document.querySelector("#valor").value;
  alert(`Has valorado con ${valor} estrellas`);
}


///////// Ver Cuenta

document.querySelector("#pais").value;
document.querySelector("#control_iban").value;
document.querySelector("#entidad").value;
document.querySelector("#sucursal").value;
document.querySelector("#dc").value;
document.querySelector("#cuenta").value;

function verCuenta() {
  let pais = document.querySelector("#pais").value;
  let control_iban = document.querySelector("#control_iban").value;
  let entidad = document.querySelector("#entidad").value;
  let sucursal = document.querySelector("#sucursal").value;
  let dc = document.querySelector("#dc").value;
  let cuenta = document.querySelector("#cuenta").value;
  alert(
    `Le informamos de que su número de cuenta es: ${pais}-${control_iban}-${entidad}-${sucursal}-${dc}-${cuenta}`
  );
}


///////// Ver Fecha

function verFecha() {
  let fecha_con_tipo_domstring = document.getElementById("fecha").value;
  let fecha_con_tipo_date = new Date(fecha_con_tipo_domstring);

  var fecha_conformato = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
  }).format(fecha_con_tipo_date);

  alert(
    `La fecha seleccionada es ${fecha_con_tipo_domstring}, que cae en ${fecha_conformato}`
  );
}