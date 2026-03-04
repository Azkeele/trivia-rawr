const params = new URLSearchParams(window.location.search);
const categoria = params.get("cat");

document.getElementById("tituloCategoria").innerText =
    categoria ? categoria.toUpperCase() : "TRIVIA";

/* Fondos */
const fondosCategorias = {
    fama: "url('img/fama.jpg')",
    vinculos: "url('img/vinculos.jpg')",
    resignacion: "url('img/resignacion.jpg')",
    felicidad: "url('img/felicidad.jpg')",
    meteorito: "url('img/meteorito.jpg')",
    proyecto: "url('img/proyecto.jpg')"
};

if (categoria && fondosCategorias[categoria]) {
    document.body.style.backgroundImage = fondosCategorias[categoria];
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
}

/* Juego */

let preguntasDisponibles = categoria && basePreguntas[categoria]
    ? [...basePreguntas[categoria]]
    : [];

let preguntaActual = null;

function obtenerPreguntaAleatoria() {
    if (preguntasDisponibles.length === 0) return null;

    const index = Math.floor(Math.random() * preguntasDisponibles.length);
    return preguntasDisponibles.splice(index, 1)[0];
}

function mostrarPregunta() {
    preguntaActual = obtenerPreguntaAleatoria();
    if (!preguntaActual) return;

    document.getElementById("pregunta").innerText =
        preguntaActual.pregunta;

    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";

    preguntaActual.opciones.forEach((opcion, index) => {
        const btn = document.createElement("button");
        btn.innerText = opcion;
        btn.onclick = () => verificarRespuesta(index);
        opcionesDiv.appendChild(btn);
    });
}

function verificarRespuesta(indice) {
    if (indice === preguntaActual.correcta) {
        document.getElementById("resultado").innerText = "Correcto ✅";
    } else {
        document.getElementById("resultado").innerText = "Incorrecto ❌";
    }
}

mostrarPregunta();
