const params = new URLSearchParams(window.location.search);
const categoria = params.get("cat");

document.getElementById("tituloCategoria").innerText = categoria.toUpperCase();

let preguntasDisponibles = [...basePreguntas[categoria]];
let preguntaActual = null;
let puntaje = 0;

function obtenerPreguntaAleatoria() {
    if (preguntasDisponibles.length === 0) {
        document.getElementById("pregunta").innerText = "Juego terminado";
        document.getElementById("opciones").innerHTML = "";
        document.getElementById("resultado").innerText = "";
        document.getElementById("puntaje").innerText = "Puntaje final: " + puntaje + "/10";
        return null;
    }

    const index = Math.floor(Math.random() * preguntasDisponibles.length);
    return preguntasDisponibles.splice(index, 1)[0];
}

function mostrarPregunta() {
    preguntaActual = obtenerPreguntaAleatoria();
    if (!preguntaActual) return;

    document.getElementById("pregunta").innerText = preguntaActual.pregunta;

    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";

    preguntaActual.opciones.forEach((opcion, index) => {
        const btn = document.createElement("button");
        btn.innerText = opcion;
        btn.onclick = () => verificarRespuesta(index);
        opcionesDiv.appendChild(btn);
    });

    document.getElementById("resultado").innerText = "";
    document.getElementById("puntaje").innerText = "Puntaje: " + puntaje;
}

function verificarRespuesta(indice) {
    if (indice === preguntaActual.correcta) {
        puntaje++;
        document.getElementById("resultado").innerText = "Correcto ✅";
    } else {
        document.getElementById("resultado").innerText = "Incorrecto ❌";
    }
}

function siguientePregunta() {
    mostrarPregunta();
}

mostrarPregunta();