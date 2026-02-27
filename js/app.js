const params = new URLSearchParams(window.location.search);
const categoria = params.get("cat");

document.getElementById("tituloCategoria").innerText = categoria.toUpperCase();
document.getElementById("tituloCategoria").innerText = categoria.toUpperCase();

/* 🎨 Colores por categoría */
const coloresCategorias = {
    fama: "linear-gradient(135deg, #f7d046, #f4a261)",
    vinculos: "linear-gradient(135deg, #ffafcc, #bde0fe)",
    resignacion: "linear-gradient(135deg, #b8c0ff, #e0c3fc)",
    felicidad: "linear-gradient(135deg, #caffbf, #9bf6ff)",
    meteorito: "linear-gradient(135deg, #bdb2ff, #a0c4ff)",
    proyecto: "linear-gradient(135deg, #ffd6a5, #fdffb6)"
};

if (coloresCategorias[categoria]) {
    document.body.style.background = coloresCategorias[categoria];
}

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
