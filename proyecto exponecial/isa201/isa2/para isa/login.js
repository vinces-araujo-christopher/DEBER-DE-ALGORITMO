// Login
function procesarLogin() {
    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (usernameInput === "" || passwordInput === "") {
        errorMessage.textContent = "Por favor, complete todos los campos.";
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioValido = usuarios.find(
        (u) => u.username === usernameInput && u.password === passwordInput
    );

    if (usuarioValido) {
        localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioValido));
        window.location.href = "menu.html";
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
}

function limpiarErroresLogin() {
    const errorMessage = document.getElementById("errorMessage");
    if (errorMessage) errorMessage.textContent = "";
}

// Registro
function procesarRegistro() {
    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const confirmPasswordInput = document.getElementById("confirm-password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (usernameInput === "" || passwordInput === "" || confirmPasswordInput === "") {
        errorMessage.textContent = "Todos los campos son obligatorios.";
        return;
    }

    if (passwordInput !== confirmPasswordInput) {
        errorMessage.textContent = "Las contraseñas no coinciden.";
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExistente = usuarios.find((u) => u.username === usernameInput);
    if (usuarioExistente) {
        errorMessage.textContent = "Este nombre de usuario ya está registrado.";
        return;
    }

    usuarios.push({ username: usernameInput, password: passwordInput });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "login.html";
}

function limpiarErroresRegistro() {
    const errorMessage = document.getElementById("error-message");
    if (errorMessage) errorMessage.textContent = "";
}

function irARegistro() {
    window.location.href = "registro.html";
}

function mostrarUsuarioLogueado() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
    if (usuario) {
        console.log("Usuario en sesión: " + usuario.username);
        // window.location.href = "menu.html";
    }
}

function cerrarSesion() {
    localStorage.removeItem("usuarioLogueado");
    window.location.href = "login.html";
}
