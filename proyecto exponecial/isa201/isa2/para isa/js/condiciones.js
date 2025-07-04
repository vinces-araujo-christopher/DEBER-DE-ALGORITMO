function verificarEdad() {
  const edad = parseInt(document.getElementById("edad").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(edad) || edad < 0) {
    resultado.textContent = "⚠️ Ingresa una edad válida.";
    resultado.style.color = "orangered";
    return;
  }

  if (edad <= 12) {
    resultado.textContent = "👶 Eres un niño.";
    resultado.style.color = "#3498db";
  } else if (edad <= 17) {
    resultado.textContent = "🧒 Eres un adolescente.";
    resultado.style.color = "#f39c12";
  } else if (edad <= 59) {
    resultado.textContent = "🧑 Eres un adulto.";
    resultado.style.color = "#27ae60";
  } else {
    resultado.textContent = "👴 Eres un adulto mayor.";
    resultado.style.color = "#9b59b6";
  }
}


function encontrarMayor() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const n3 = parseFloat(document.getElementById("num3").value);
  const n4 = parseFloat(document.getElementById("num4").value);
  const resultado = document.getElementById("resultado");

  if ([n1, n2, n3, n4].some(isNaN)) {
    resultado.textContent = "⚠️ Debes ingresar los cuatro números.";
    resultado.style.color = "orangered";
    return;
  }

  if (n1 === n2 && n2 === n3 && n3 === n4) {
    resultado.textContent = "✨ Todos los números son iguales.";
    resultado.style.color = "#3498db";
    return;
  }

  let mayor = Math.max(n1, n2, n3, n4);

  resultado.textContent = `✅ El número mayor es: ${mayor}`;
  resultado.style.color = "#27ae60";
}


function evaluarNota() {
  const nota = parseFloat(document.getElementById("nota").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(nota) || nota < 0 || nota > 10) {
    resultado.textContent = "⚠️ Ingresa una nota válida entre 0 y 10.";
    resultado.style.color = "orangered";
    return;
  }

  if (nota >= 7) {
    resultado.textContent = "✅ ¡Aprobado!";
    resultado.style.color = "#27ae60";
  } else if (nota >= 5) {
    resultado.textContent = "⚠️ Estás en supletorio.";
    resultado.style.color = "#f39c12";
  } else {
    resultado.textContent = "❌ Reprobado.";
    resultado.style.color = "#e74c3c";
  }
}


function verificarDia() {
  const dia = document.getElementById("dia").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");

  if (!dia) {
    resultado.textContent = "⚠️ Ingresa un día válido.";
    resultado.style.color = "orangered";
    return;
  }

  const diasFinDeSemana = ["sábado", "sabado", "domingo"];
  const diasEntreSemana = ["lunes", "martes", "miércoles", "miercoles", "jueves", "viernes"];

  if (diasFinDeSemana.includes(dia)) {
    resultado.textContent = "🎉 Es fin de semana.";
    resultado.style.color = "#9b59b6";
  } else if (diasEntreSemana.includes(dia)) {
    resultado.textContent = "📘 Es un día entre semana.";
    resultado.style.color = "#2980b9";
  } else {
    resultado.textContent = "❌ Día no válido. Escribe el nombre de un día.";
    resultado.style.color = "crimson";
  }
}


function evaluarTemperatura() {
  const temp = parseFloat(document.getElementById("temp").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(temp)) {
    resultado.textContent = "⚠️ Ingresa una temperatura válida.";
    resultado.style.color = "orangered";
    return;
  }

  if (temp < 15) {
    resultado.textContent = "❄️ Hace frío.";
    resultado.style.color = "#3498db";
  } else if (temp <= 25) {
    resultado.textContent = "🌤️ Está templado.";
    resultado.style.color = "#f1c40f";
  } else {
    resultado.textContent = "🔥 Hace calor.";
    resultado.style.color = "#e74c3c";
  }
}


function mostrarSaludo() {
  const nombre = document.getElementById("nombre").value.trim();
  const genero = document.getElementById("genero").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");

  if (!nombre || !genero) {
    resultado.textContent = "⚠️ Ingresa ambos campos.";
    resultado.style.color = "orangered";
    return;
  }

  if (genero === "masculino") {
    resultado.textContent = `👦 Bienvenido, ${nombre}.`;
    resultado.style.color = "#3498db";
  } else if (genero === "femenino") {
    resultado.textContent = `👧 Bienvenida, ${nombre}.`;
    resultado.style.color = "#e91e63";
  } else {
    resultado.textContent = "❌ Género no válido. Escribe 'masculino' o 'femenino'.";
    resultado.style.color = "crimson";
  }
}


function saludarPorHora() {
  const hora = parseInt(document.getElementById("hora").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(hora) || hora < 0 || hora > 23) {
    resultado.textContent = "⚠️ Ingresa una hora válida entre 0 y 23.";
    resultado.style.color = "orangered";
    return;
  }

  if (hora >= 0 && hora <= 11) {
    resultado.textContent = "☀️ Buenos días.";
    resultado.style.color = "#f1c40f";
  } else if (hora >= 12 && hora <= 17) {
    resultado.textContent = "🌇 Buenas tardes.";
    resultado.style.color = "#e67e22";
  } else {
    resultado.textContent = "🌙 Buenas noches.";
    resultado.style.color = "#8e44ad";
  }
}



function calcularBono() {
  const hijos = parseInt(document.getElementById("hijos").value);
  const trabajo = document.getElementById("trabajo").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");

  if (isNaN(hijos) || hijos < 0) {
    resultado.textContent = "⚠️ Ingresa un número válido de hijos.";
    resultado.style.color = "orangered";
    return;
  }

  if (trabajo !== "sí" && trabajo !== "si" && trabajo !== "no") {
    resultado.textContent = "⚠️ Escribe 'sí' o 'no' para indicar si tienes trabajo.";
    resultado.style.color = "orangered";
    return;
  }

  let bono = 0;

  if (trabajo === "sí" || trabajo === "si") {
    bono = hijos * 50;
  } else {
    bono = hijos * 30;
  }

  resultado.textContent = `✅ Tu bono es: $${bono}`;
  resultado.style.color = "#27ae60";
}


function calcularTotal() {
  const tipo = document.getElementById("tipo").value.trim().toLowerCase();
  const gasto = parseFloat(document.getElementById("gasto").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(gasto) || gasto <= 0) {
    resultado.textContent = "⚠️ Ingresa un monto de gasto válido.";
    resultado.style.color = "orangered";
    return;
  }

  if (tipo !== "vip" && tipo !== "normal") {
    resultado.textContent = "⚠️ El tipo de cliente debe ser 'Normal' o 'VIP'.";
    resultado.style.color = "orangered";
    return;
  }

  let descuento = 0;

  if (tipo === "vip" && gasto > 100) {
    descuento = gasto * 0.20;
  } else {
    descuento = gasto * 0.10;
  }

  const subtotal = gasto - descuento;
  const iva = subtotal * 0.15;
  const totalFinal = subtotal + iva;

  resultado.innerHTML = `
    🧾 Gasto original: $${gasto.toFixed(2)}<br>
    🏷️ Descuento aplicado: $${descuento.toFixed(2)}<br>
    💵 Subtotal con descuento: $${subtotal.toFixed(2)}<br>
    🧮 IVA (15%): $${iva.toFixed(2)}<br>
    ✅ Total a pagar: <strong>$${totalFinal.toFixed(2)}</strong>
  `;
  resultado.style.color = "#2c3e50";
}


function calcularDescuento() {
  const tieneMembresia = document.getElementById("membresia").value.trim().toLowerCase();
  const compra = parseFloat(document.getElementById("compra").value);
  const resultado = document.getElementById("resultado");

  if (tieneMembresia !== "sí" && tieneMembresia !== "si" && tieneMembresia !== "no") {
    resultado.textContent = "⚠️ Ingresa 'sí' o 'no' en membresía.";
    resultado.style.color = "orangered";
    return;
  }

  if (isNaN(compra) || compra <= 0) {
    resultado.textContent = "⚠️ Ingresa un monto de compra válido.";
    resultado.style.color = "orangered";
    return;
  }

  let descuento = 0;
  let iva = 0;

  if ((tieneMembresia === "sí" || tieneMembresia === "si") && compra > 50) {
    descuento = compra * 0.30;
    iva = (compra - descuento) * 0.15;
  } else {
    descuento = compra * 0.05;
    iva = (compra - descuento) * 0.10;
  }

  const subtotal = compra - descuento;
  const total = subtotal + iva;

  resultado.innerHTML = `
    🧾 Compra original: $${compra.toFixed(2)}<br>
    🏷️ Descuento aplicado: $${descuento.toFixed(2)}<br>
    💵 Subtotal con descuento: $${subtotal.toFixed(2)}<br>
    🧮 IVA aplicado: $${iva.toFixed(2)}<br>
    ✅ Total a pagar: <strong>$${total.toFixed(2)}</strong>
  `;
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