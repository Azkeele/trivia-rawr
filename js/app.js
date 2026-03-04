/* Obtener categoría desde la URL */
const params = new URLSearchParams(window.location.search);
const categoria = params.get("cat");

/* Mostrar título */
document.getElementById("tituloCategoria").innerText =
    categoria ? categoria.toUpperCase() : "TRIVIA";

/* 🎨 Fondos por categoría */
const fondosCategorias = {
    fama: "url('img/fama.jpg')",
    vinculos: "url('img/vinculos.jpg')",
	@@ -16,7 +14,6 @@ const fondosCategorias = {
    proyecto: "url('img/proyecto.jpg')"
};

/* Aplicar fondo correctamente SIN que se repita */
if (categoria && fondosCategorias[categoria]) {
    document.body.style.backgroundImage = fondosCategorias[categoria];
    document.body.style.backgroundSize = "cover";
	@@ -25,9 +22,7 @@ if (categoria && fondosCategorias[categoria]) {
    document.body.style.backgroundAttachment = "fixed";
}

/* ============================= */
/*        LÓGICA DE JUEGO        */
/* ============================= */

let preguntasDisponibles = categoria && basePreguntas[categoria]
    ? [...basePreguntas[categoria]]
	@@ -36,12 +31,7 @@ let preguntasDisponibles = categoria && basePreguntas[categoria]
let preguntaActual = null;

function obtenerPreguntaAleatoria() {
    if (preguntasDisponibles.length === 0) {
        document.getElementById("pregunta").innerText =
            "No hay más preguntas.";
        document.getElementById("opciones").innerHTML = "";
        return null;
    }

    const index = Math.floor(Math.random() * preguntasDisponibles.length);
    return preguntasDisponibles.splice(index, 1)[0];
	@@ -63,15 +53,9 @@ function mostrarPregunta() {
        btn.onclick = () => verificarRespuesta(index);
        opcionesDiv.appendChild(btn);
    });

    document.getElementById("resultado").innerText = "";
}

function verificarRespuesta(indice) {
    const botones = document.querySelectorAll("#opciones button");

    botones.forEach(btn => btn.disabled = true);

    if (indice === preguntaActual.correcta) {
        document.getElementById("resultado").innerText = "Correcto ✅";
    } else {
