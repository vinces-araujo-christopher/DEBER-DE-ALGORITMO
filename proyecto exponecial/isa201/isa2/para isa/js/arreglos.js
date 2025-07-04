function calcularPromedio() {
  const input = document.getElementById("numeros").value;
  const resultado = document.getElementById("resultado");

  if (input.trim() === "") {
    resultado.textContent = "⚠️ Ingresa 5 números separados por coma.";
    resultado.style.color = "orangered";
    return;
  }

  
  const numeros = input.split(",").map(num => Number(num.trim()));

  if (numeros.length !== 5 || numeros.some(isNaN)) {
    resultado.textContent = "⚠️ Debes ingresar exactamente 5 números válidos.";
    resultado.style.color = "orangered";
    return;
  }

  const suma = numeros.reduce((acc, curr) => acc + curr, 0);
  const promedio = suma / numeros.length;

  resultado.textContent = `✅ El promedio es: ${promedio.toFixed(2)}`;
  resultado.style.color = "#2c3e50";
}





function contarImpares() {
  const input = document.getElementById("numeros").value;
  const resultado = document.getElementById("resultado");

  if (input.trim() === "") {
    resultado.textContent = "⚠️ Ingresa números separados por coma.";
    resultado.style.color = "orangered";
    return;
  }

  const numeros = input.split(",").map(num => Number(num.trim()));

  if (numeros.some(isNaN)) {
    resultado.textContent = "⚠️ Ingresa solo números válidos.";
    resultado.style.color = "orangered";
    return;
  }

  const impares = numeros.filter(num => num % 2 !== 0);

  resultado.textContent = `✅ Hay ${impares.length} número(s) impar(es) en el arreglo.`;
  resultado.style.color = "#2c3e50";
}





function contarMayores() {
  const input = document.getElementById("edades").value;
  const resultado = document.getElementById("resultado");

  if (input.trim() === "") {
    resultado.textContent = "⚠️ Ingresa las edades separadas por coma.";
    resultado.style.color = "orangered";
    return;
  }

  const edades = input.split(",").map(num => Number(num.trim()));

  if (edades.some(isNaN)) {
    resultado.textContent = "⚠️ Ingresa solo números válidos.";
    resultado.style.color = "orangered";
    return;
  }

  const mayores = edades.filter(edad => edad >= 18);

  resultado.textContent = `✅ Hay ${mayores.length} persona(s) mayor(es) de edad.`;
  resultado.style.color = "#2c3e50";
}




function buscarValor() {
  const arregloInput = document.getElementById("arreglo").value;
  const valorInput = document.getElementById("valor").value.trim();
  const resultado = document.getElementById("resultado");

  if (arregloInput.trim() === "" || valorInput === "") {
    resultado.textContent = "⚠️ Ingresa el arreglo y el valor a buscar.";
    resultado.style.color = "orangered";
    return;
  }

  const arreglo = arregloInput.split(",").map(num => Number(num.trim()));

  if (arreglo.some(isNaN)) {
    resultado.textContent = "⚠️ Ingresa solo números válidos en el arreglo.";
    resultado.style.color = "orangered";
    return;
  }

  const valor = Number(valorInput);
  if (isNaN(valor)) {
    resultado.textContent = "⚠️ Ingresa un número válido para buscar.";
    resultado.style.color = "orangered";
    return;
  }

  const existe = arreglo.includes(valor);

  if (existe) {
    resultado.textContent = `✅ El valor ${valor} existe en el arreglo.`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = `❌ El valor ${valor} NO existe en el arreglo.`;
    resultado.style.color = "crimson";
  }
}


function concatenarPalabras() {
  const input = document.getElementById("palabras").value;
  const resultado = document.getElementById("resultado");

  if (input.trim() === "") {
    resultado.textContent = "⚠️ Ingresa palabras separadas por coma.";
    resultado.style.color = "orangered";
    return;
  }

  const palabras = input.split(",").map(p => p.trim());

  const frase = palabras.join(" ");

  resultado.textContent = `✅ Frase concatenada: ${frase}`;
  resultado.style.color = "#2c3e50";
}





function calcularCubos() {
  const input = document.getElementById("numeros").value;
  const resultado = document.getElementById("resultado");

  if (input.trim() === "") {
    resultado.textContent = "⚠️ Ingresa números separados por coma.";
    resultado.style.color = "orangered";
    return;
  }

  const numeros = input.split(",").map(num => Number(num.trim()));

  if (numeros.some(isNaN)) {
    resultado.textContent = "⚠️ Ingresa solo números válidos.";
    resultado.style.color = "orangered";
    return;
  }

  const cubos = numeros.map(num => Math.pow(num, 3));

  resultado.textContent = `✅ Cubos: [${cubos.join(", ")}]`;
  resultado.style.color = "#2c3e50";
}




function mostrarTablas() {
  const input = document.getElementById("numeros").value;
  const resultado = document.getElementById("resultado");

  if (input.trim() === "") {
    resultado.innerHTML = "<p style='color: orangered;'>⚠️ Ingresa números separados por coma.</p>";
    return;
  }

  const numeros = input.split(",").map(num => Number(num.trim()));

  if (numeros.some(isNaN)) {
    resultado.innerHTML = "<p style='color: orangered;'>⚠️ Ingresa solo números válidos.</p>";
    return;
  }

  let html = "";

  numeros.forEach(num => {
    html += `<h3>Tabla del ${num}</h3><ul>`;
    for (let i = 1; i <= 10; i++) {
      html += `<li>${num} x ${i} = ${num * i}</li>`;
    }
    html += "</ul>";
  });

  resultado.innerHTML = html;
}



function factorial(n) {
  if (n < 0) return null; 
  if (n === 0 || n === 1) return 1;
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function mostrarFactoriales() {
  const input = document.getElementById("numeros").value;
  const resultado = document.getElementById("resultado");

  if (input.trim() === "") {
    resultado.innerHTML = "<p style='color: orangered;'>⚠️ Ingresa números separados por coma.</p>";
    return;
  }

  const numeros = input.split(",").map(num => Number(num.trim()));

  if (numeros.some(isNaN)) {
    resultado.innerHTML = "<p style='color: orangered;'>⚠️ Ingresa solo números válidos.</p>";
    return;
  }

  let html = "<ul>";
  numeros.forEach(num => {
    const fact = factorial(num);
    if (fact === null) {
      html += `<li>Factorial no definido para ${num} (número negativo)</li>`;
    } else {
      html += `<li>Factorial de ${num} = ${fact}</li>`;
    }
  });
  html += "</ul>";

  resultado.innerHTML = html;
}


function copiarPares() {
  const input = document.getElementById("numeros").value;
  const resultado = document.getElementById("resultado");

  if (input.trim() === "") {
    resultado.textContent = "⚠️ Ingresa números separados por coma.";
    resultado.style.color = "orangered";
    return;
  }

  const numeros = input.split(",").map(num => Number(num.trim()));

  if (numeros.some(isNaN)) {
    resultado.textContent = "⚠️ Ingresa solo números válidos.";
    resultado.style.color = "orangered";
    return;
  }

  const pares = numeros.filter(num => num % 2 === 0);

  resultado.textContent = `✅ Números pares copiados: [${pares.join(", ")}]`;
  resultado.style.color = "#2c3e50";
}


function sumarArreglos() {
  const arreglo1Input = document.getElementById("arreglo1").value;
  const arreglo2Input = document.getElementById("arreglo2").value;
  const resultado = document.getElementById("resultado");

  if (arreglo1Input.trim() === "" || arreglo2Input.trim() === "") {
    resultado.textContent = "⚠️ Ingresa ambos arreglos.";
    resultado.style.color = "orangered";
    return;
  }

  const arreglo1 = arreglo1Input.split(",").map(num => Number(num.trim()));
  const arreglo2 = arreglo2Input.split(",").map(num => Number(num.trim()));

  if (arreglo1.some(isNaN) || arreglo2.some(isNaN)) {
    resultado.textContent = "⚠️ Ingresa solo números válidos en ambos arreglos.";
    resultado.style.color = "orangered";
    return;
  }

  if (arreglo1.length !== arreglo2.length) {
    resultado.textContent = "⚠️ Ambos arreglos deben tener la misma cantidad de elementos.";
    resultado.style.color = "orangered";
    return;
  }

  const suma = arreglo1.map((num, idx) => num + arreglo2[idx]);

  resultado.textContent = `✅ Resultado de la suma: [${suma.join(", ")}]`;
  resultado.style.color = "#2c3e50";
}

function limpiarCampos() {
  document.querySelectorAll('input').forEach(input => input.value = '');
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.textContent = "";
    resultado.style.color = "";
  }
}










