
function mostrarNumeros() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpia la lista anterior

  for (let i = 1; i <= 10; i++) {
    const item = document.createElement("li");
    item.textContent = i;
    resultado.appendChild(item);
  }
}


function mostrarTabla() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = ""; // Limpiar resultados anteriores

  if (isNaN(numero)) {
    const error = document.createElement("li");
    error.textContent = "⚠️ Por favor, ingresa un número válido.";
    resultado.appendChild(error);
    return;
  }

  for (let i = 1; i <= 10; i++) {
    const item = document.createElement("li");
    item.textContent = `${numero} x ${i} = ${numero * i}`;
    resultado.appendChild(item);
  }
}


function sumarNumeros() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(numero) || numero < 1) {
    resultado.textContent = "⚠️ Ingresa un número natural válido (mayor que 0).";
    resultado.style.color = "orangered";
    return;
  }

  let suma = 0;
  for (let i = 1; i <= numero; i++) {
    suma += i;
  }

  resultado.textContent = `✅ La suma de los primeros ${numero} números naturales es: ${suma}`;
  resultado.style.color = "#2c3e50";
}


function calcularFactorial() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(numero) || numero < 0) {
    resultado.textContent = "⚠️ Ingresa un número entero positivo.";
    resultado.style.color = "orangered";
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  resultado.textContent = `✅ El factorial de ${numero} es: ${factorial}`;
  resultado.style.color = "#2c3e50";
}


function mostrarPares() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultados anteriores

  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      const item = document.createElement("li");
      item.textContent = i;
      resultado.appendChild(item);
    }
  }
}


function mostrarDivisores() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultados anteriores

  if (isNaN(numero) || numero < 1) {
    const error = document.createElement("li");
    error.textContent = "⚠️ Ingresa un número entero positivo.";
    resultado.appendChild(error);
    return;
  }

  let i = 1;
  while (i <= numero) {
    if (numero % i === 0) {
      const item = document.createElement("li");
      item.textContent = i;
      resultado.appendChild(item);
    }
    i++;
  }
}


function generarFibonacci() {
  const n = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (isNaN(n) || n < 1) {
    const error = document.createElement("li");
    error.textContent = "⚠️ Ingresa un número entero mayor a 0.";
    resultado.appendChild(error);
    return;
  }

  let a = 0;
  let b = 1;
  let contador = 0;

  while (contador < n) {
    const item = document.createElement("li");
    item.textContent = a;
    resultado.appendChild(item);

    let temp = a + b;
    a = b;
    b = temp;
    contador++;
  }
}


function pedirNombres() {
  let contador = 0;
  let nombre = "";

  while (true) {
    nombre = prompt("Ingresa un nombre (escribe 'Messi' para terminar):");

    if (nombre === null) {
      // Usuario canceló
      break;
    }

    if (nombre.trim().toLowerCase() === "messi") {
      break;
    }

    if (nombre.trim() !== "") {
      contador++;
    }
  }

  const resultado = document.getElementById("resultado");
  resultado.textContent = `✅ Ingresaste ${contador} nombre(s) antes de escribir "Messi".`;
}


function sumarNumeros() {
  let suma = 0;
  let input;

  while (true) {
    input = prompt("Ingresa un número (negativo para terminar):");

    if (input === null) {
      break; // Usuario canceló
    }

    let numero = parseFloat(input);

    if (isNaN(numero)) {
      alert("⚠️ Eso no es un número válido.");
      continue;
    }

    if (numero < 0) {
      break;
    }

    suma += numero;
  }

  const resultado = document.getElementById("resultado");
  resultado.textContent = `✅ La suma total de los números ingresados es: ${suma}`;
}


function contarNumeros() {
  let contador = 0;
  let input;

  while (true) {
    input = prompt("Ingresa un número (0 para terminar):");

    if (input === null) {
      break; // Usuario canceló
    }

    let numero = parseFloat(input);

    if (isNaN(numero)) {
      alert("⚠️ Eso no es un número válido.");
      continue;
    }

    if (numero === 0) {
      break;
    }

    contador++;
  }

  const resultado = document.getElementById("resultado");
  resultado.textContent = `✅ Ingresaste ${contador} número(s) válidos antes de escribir 0.`;
}
function limpiarCampos() {
  document.querySelectorAll('input').forEach(input => input.value = '');
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.textContent = "";
    resultado.style.color = "";
  }
}