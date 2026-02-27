const params = new URLSearchParams(window.location.search);
const categoria = params.get("cat");

document.getElementById("tituloCategoria").innerText = categoria.toUpperCase();

let preguntasDisponibles = [...basePreguntas[categoria]];
let preguntaActual = null;

function obtenerPreguntaAleatoria() {
    if (preguntasDisponibles.length === 0) {
        document.getElementById("pregunta").innerText = "No hay más preguntas.";
        document.getElementById("opciones").innerHTML = "";
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
}

function verificarRespuesta(indice) {
    const botones = document.querySelectorAll("#opciones button");

    botones.forEach(btn => btn.disabled = true);

    if (indice === preguntaActual.correcta) {
        document.getElementById("resultado").innerText = "Correcto ✅";
    } else {
        document.getElementById("resultado").innerText = "Incorrecto ❌";
    }
}

mostrarPregunta();
