let inputNumero = document.querySelector("#DNI_numero");
let inputLetra = document.querySelector("#DNI_letra");

function calcularLetra() {
  // Pedir el valor del input

  let inputNumeroValor = document.querySelector("#DNI_numero").value;
  let inputLetraValor = document.querySelector("#DNI_letra").value;

  // Convertir el valor del input letra a mayúscula (lo necesitaré después)
  let inputLetraValorUpperCase = inputLetraValor.toUpperCase();

  // Letras DNI

  const arrayLetrasDNI = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  // Calcular resto y posición

  let resto = inputNumeroValor % 23;
  let letra = arrayLetrasDNI[resto];

  // Almacenar letras en un ARRAY con método PUSH

  const arrayLetras = [];

  arrayLetras.push(letra);
  console.log(arrayLetras);

  /*
  Aquí pruebo otra manera de hacerlo con una función,
  pero prefiero el método de la línea 52

  let i = 0;

  function guardarLetras() {
    arrayLetras[i] = letra;

    for (i = 0; i < arrayLetras.length; i++) {
      arrayLetras[i];
    }
    console.log(arrayLetras);
  }
  */

  // Mostrar resultado creando un nodo ----------------- Función declarada para ejecutarla después

  function mensajeDOM() {
    let div = document.createElement("div");
    let formulario = document.querySelector("form");

    //añadir el div al formulario
    formulario.appendChild(div);

    //resultado correcto (para esto iba a necesitar pasar la letra a upper case)
    if (letra === inputLetraValorUpperCase)
      return (
        (div.innerHTML = `<h1>${letra}</h1><h3>La letra de este DNI coincide con la que has introducido</h3>`),
        (div.style.backgroundColor = "#00aa00"),
        (div.style.padding = ".8em")
      );

    //Resultado sin letra
    if (!inputLetraValor)
      return (
        (div.innerHTML = `<h3>La letra correspondiente a este número de DNI sería:</h3><h1>${letra}</h1>`),
        (div.style.backgroundColor = "#00aa00"),
        (div.style.padding = ".8em")
      );

    //Resultado erróneo
    if (letra != inputLetraValorUpperCase)
      return (
        (div.innerHTML = `<h3>La letra de este DNI no coincide con la que has introducido, la correcta sería:</h3><h1>${letra}</h1>`),
        (div.style.backgroundColor = "#cc0000"),
        (div.style.padding = ".8em")
      );
  }

  // Validación del número

  if (!inputNumeroValor);
  if (inputNumeroValor.length < 8)
    return alert(`Ingresa 8 dígitos`), (inputNumero.value = "");
  if (isNaN(inputNumeroValor))
    return alert(`Solo debe contener números`), (inputNumero.value = "");
  if (Math.sign(inputNumeroValor) === -1)
    return alert(`El número no puede ser negativo`), (inputNumero.value = "");
  /*

  if (!inputNumeroValor) {
    alert(`Ingresa 8 dígitos`), (inputNumero.value = "");
  } else if (inputNumeroValor.length < 8) {
    alert(`Solo debe contener números`), (inputNumero.value = "");
  } else if (isNaN(inputNumeroValor)) {
    alert(`Solo debe contener números`), (inputNumero.value = "");
  } else if (Math.sign(inputNumeroValor) === -1) {
    alert(`El número no puede ser negativo`), (inputNumero.value = "");
  }
  */
  // Validación de la letra
  else if (!inputLetraValor) return mensajeDOM();
  else if (!isNaN(inputLetraValor))
    return alert(`La letra no debe ser un número`), (inputLetra.value = "");

  //Almacenar las letras en un array - EJECUTAR función
  //Esta manera de guardar en un array la he comentado porque
  //he preferido utilizar el método PUSH (está más arriba)

  //  guardarLetras();

  // Mostrar resultado creando un nodo - EJECUTAR función

  mensajeDOM();
}

///////// Para que funcione con la tecla ENTER

inputNumero.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    calcularLetra();
    return true;
  }
});

inputLetra.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    calcularLetra();
    return true;
  }
});
