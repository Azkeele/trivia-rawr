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
    fama: "linear-gradient(135deg, #feedae, #ffa941c6)",
    vinculos: "linear-gradient(135deg, #ffafcc, #ba4b4b)",
    resignacion: "linear-gradient(135deg, #6b6e83, #766487)",
    felicidad: "linear-gradient(135deg, #caffbf, #9bf6ff)",
    meteorito: "linear-gradient(135deg, #af5b5b, #77787a)",
    proyecto: "linear-gradient(135deg, #ffd6a5, #fdffb6)"
};

if (coloresCategorias[categoria]) {
    document.body.style.background = coloresCategorias[categoria];
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
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

                // Limpiar clases previas
                    resultadoElemento.classList.remove("correcto", "incorrecto");

                        if (indice === preguntaActual.correcta) {
                                resultadoElemento.innerText = "¡Correcto!";
                                        resultadoElemento.classList.add("correcto");
                                            } else { 
                                                    resultadoElemento.innerText = "Incorrecto";
                                                            resultadoElemento.classList.add("incorrecto");
                                                                }

                                                                    // Desaparecer después de 1.5s
                                                                        setTimeout(() => {
                                                                                resultadoElemento.classList.remove("correcto", "incorrecto");
                                                                                        resultadoElemento.innerText = "";
                                                                                            }, 1500);
                                                                                            }
                                                                                        
