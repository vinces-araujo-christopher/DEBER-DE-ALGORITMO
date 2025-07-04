function contarLetras() {
  const palabra = document.getElementById("palabra").value.trim();
  const resultado = document.getElementById("resultado");

  if (palabra === "") {
    resultado.textContent = "⚠️ Ingresa una palabra válida.";
    resultado.style.color = "orangered";
    return;
  }

  const cantidad = palabra.length;
  resultado.textContent = `✅ La palabra "${palabra}" tiene ${cantidad} letra(s).`;
  resultado.style.color = "#2c3e50";
}


function contarA() {
  const texto = document.getElementById("texto").value;
  const resultado = document.getElementById("resultado");

  if (texto.trim() === "") {
    resultado.textContent = "⚠️ Por favor, escribe algún texto.";
    resultado.style.color = "orangered";
    return;
  }

  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i].toLowerCase() === "a") {
      contador++;
    }
  }

  resultado.textContent = `✅ La letra "a" aparece ${contador} vez/veces.`;
  resultado.style.color = "#2c3e50";
}


function invertirTexto() {
  const texto = document.getElementById("texto").value;
  const resultado = document.getElementById("resultado");

  if (texto.trim() === "") {
    resultado.textContent = "⚠️ Ingresa una cadena válida.";
    resultado.style.color = "orangered";
    return;
  }

  const invertida = texto.split("").reverse().join("");
  resultado.textContent = `🔁 Cadena invertida: "${invertida}"`;
  resultado.style.color = "#2c3e50";
}


function compararTextos() {
  const texto1 = document.getElementById("texto1").value.replace(/\s/g, "");
  const texto2 = document.getElementById("texto2").value.replace(/\s/g, "");
  const resultado = document.getElementById("resultado");

  if (texto1 === "" || texto2 === "") {
    resultado.textContent = "⚠️ Ingresa ambos textos.";
    resultado.style.color = "orangered";
    return;
  }

  if (texto1.length > texto2.length) {
    resultado.textContent = `📢 El texto 1 tiene más letras (${texto1.length} vs ${texto2.length}).`;
  } else if (texto2.length > texto1.length) {
    resultado.textContent = `📢 El texto 2 tiene más letras (${texto2.length} vs ${texto1.length}).`;
  } else {
    resultado.textContent = `✅ Ambos textos tienen la misma cantidad de letras (${texto1.length}).`;
  }

  resultado.style.color = "#2c3e50";
}



function mostrarIniciales() {
  const nombre = document.getElementById("nombre").value.trim();
  const resultado = document.getElementById("resultado");

  if (nombre === "") {
    resultado.textContent = "⚠️ Por favor ingresa un nombre completo.";
    resultado.style.color = "orangered";
    return;
  }

  const palabras = nombre.split(" ");
  let iniciales = "";

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] !== "") {
      iniciales += palabras[i][0].toUpperCase() + ". ";
    }
  }

  resultado.textContent = `✅ Iniciales: ${iniciales.trim()}`;
  resultado.style.color = "#2c3e50";
}


function reemplazarA() {
  const texto = document.getElementById("texto").value;
  const resultado = document.getElementById("resultado");

  if (texto.trim() === "") {
    resultado.textContent = "⚠️ Ingresa un texto válido.";
    resultado.style.color = "orangered";
    return;
  }

  const reemplazado = texto.replace(/a/gi, "@");

  resultado.textContent = `📝 Resultado: ${reemplazado}`;
  resultado.style.color = "#2c3e50";
}


function verificarPalindromo() {
  const input = document.getElementById("palabra").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");

  if (input === "") {
    resultado.textContent = "⚠️ Ingresa una palabra válida.";
    resultado.style.color = "orangered";
    return;
  }

  const invertida = input.split("").reverse().join("");

  if (input === invertida) {
    resultado.textContent = `✅ La palabra "${input}" es un palíndromo.`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = `❌ La palabra "${input}" no es un palíndromo.`;
    resultado.style.color = "crimson";
  }
}


function compararFrases() {
  const frase1 = document.getElementById("frase1").value;
  const frase2 = document.getElementById("frase2").value;
  const resultado = document.getElementById("resultado");

  if (frase1.trim() === "" || frase2.trim() === "") {
    resultado.textContent = "⚠️ Debes ingresar ambas frases.";
    resultado.style.color = "orangered";
    return;
  }

  const longitud1 = frase1.length;
  const longitud2 = frase2.length;

  if (longitud1 > longitud2) {
    resultado.textContent = `📝 La frase 1 tiene más caracteres (${longitud1} vs ${longitud2}).`;
  } else if (longitud2 > longitud1) {
    resultado.textContent = `📝 La frase 2 tiene más caracteres (${longitud2} vs ${longitud1}).`;
  } else {
    resultado.textContent = `✅ Ambas frases tienen la misma cantidad de caracteres (${longitud1}).`;
  }

  resultado.style.color = "#2c3e50";
}


function contarLetra() {
  const texto = document.getElementById("texto").value.toLowerCase();
  const letra = document.getElementById("letra").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  if (texto.trim() === "" || letra === "") {
    resultado.textContent = "⚠️ Ingresa el texto y la letra.";
    resultado.style.color = "orangered";
    return;
  }

  if (letra.length !== 1 || !/[a-zñáéíóú]/i.test(letra)) {
    resultado.textContent = "⚠️ Ingresa solo una letra válida.";
    resultado.style.color = "orangered";
    return;
  }

  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === letra) {
      contador++;
    }
  }

  resultado.textContent = `✅ La letra "${letra}" aparece ${contador} vez/veces en el texto.`;
  resultado.style.color = "#2c3e50";
}



function dividirOracion() {
  const oracion = document.getElementById("oracion").value.trim();
  const resultado = document.getElementById("resultado");

  if (oracion === "") {
    resultado.innerHTML = "<p style='color: orangered;'>⚠️ Ingresa una oración válida.</p>";
    return;
  }

  const palabras = oracion.split(/\s+/); // divide por espacios (1 o más)
  let salida = "<ul>";

  palabras.forEach((palabra, index) => {
    salida += `<li>${index + 1}. ${palabra}</li>`;
  });

  salida += "</ul>";
  resultado.innerHTML = salida;
}


function limpiarCampos() {
  document.querySelectorAll('input').forEach(input => input.value = '');
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.textContent = "";
    resultado.style.color = "";
  }
}






