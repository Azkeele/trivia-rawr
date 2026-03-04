const params = new URLSearchParams(window.location.search);
const categoria = params.get("cat");

const titulo = document.getElementById("tituloCategoria");
const preguntaElemento = document.getElementById("pregunta");
const opcionesElemento = document.getElementById("opciones");
const resultadoElemento = document.getElementById("resultado");

if (!categoria || !basePreguntas[categoria]) {
    titulo.innerText = "Categoria no valida";
    preguntaElemento.innerText = "No se encontraron preguntas.";
} else {
    titulo.innerText = categoria.toUpperCase();
}

// Colores por categoria
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

let preguntasDisponibles = basePreguntas[categoria]
    ? [...basePreguntas[categoria]]
    : [];

let preguntaActual = null;

function obtenerPreguntaAleatoria() {
    if (preguntasDisponibles.length === 0) {
        preguntaElemento.innerText = "No hay mas preguntas.";
        opcionesElemento.innerHTML = "";
        return null;
    }

    const index = Math.floor(Math.random() * preguntasDisponibles.length);
    return preguntasDisponibles.splice(index, 1)[0];
}

function mostrarPregunta() {
    preguntaActual = obtenerPreguntaAleatoria();
    if (!preguntaActual) return;

    preguntaElemento.innerText = preguntaActual.pregunta;
    opcionesElemento.innerHTML = "";
    resultadoElemento.innerText = "";

    preguntaActual.opciones.forEach((opcion, index) => {
        const btn = document.createElement("button");
        btn.innerText = opcion;
        btn.onclick = () => verificarRespuesta(index);
        opcionesElemento.appendChild(btn);
    });
}

function verificarRespuesta(indice) {
    const botones = document.querySelectorAll("#opciones button");
    botones.forEach(btn => btn.disabled = true);

    if (indice === preguntaActual.correcta) {
        resultadoElemento.innerText = "Correcto";
    } else {
        resultadoElemento.innerText = "Incorrecto";
    }
}

if (categoria && basePreguntas[categoria]) {
    mostrarPregunta();
}
