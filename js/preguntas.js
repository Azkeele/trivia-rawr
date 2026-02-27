const basePreguntas = {

fama: [
{pregunta:"¿Quién protagonizó Titanic?", opciones:["Brad Pitt","Leonardo DiCaprio","Tom Cruise","Johnny Depp"], correcta:1},
{pregunta:"¿Qué cantante es conocida como la Reina del Pop?", opciones:["Madonna","Shakira","Adele","Rihanna"], correcta:0},
{pregunta:"¿En qué saga aparece Harry Potter?", opciones:["Star Wars","Harry Potter","Marvel","Matrix"], correcta:1},
{pregunta:"¿Quién creó Marvel Comics?", opciones:["Stan Lee","Walt Disney","Spielberg","Tarantino"], correcta:0},
{pregunta:"¿Qué banda cantó 'Bohemian Rhapsody'?", opciones:["Queen","Beatles","Coldplay","Nirvana"], correcta:0},
{pregunta:"¿Qué actor interpreta a Iron Man?", opciones:["Chris Evans","Robert Downey Jr.","Mark Ruffalo","Chris Hemsworth"], correcta:1},
{pregunta:"¿Qué serie tiene dragones y tronos?", opciones:["Vikings","Game of Thrones","Breaking Bad","Lost"], correcta:1},
{pregunta:"¿Qué película tiene el personaje Jack Sparrow?", opciones:["Piratas del Caribe","Avatar","Gladiador","Interestelar"], correcta:0},
{pregunta:"¿Quién es conocido como el Rey del Pop?", opciones:["Elvis","Michael Jackson","Prince","Drake"], correcta:1},
{pregunta:"¿Qué red social es famosa por videos cortos?", opciones:["Facebook","TikTok","LinkedIn","Pinterest"], correcta:1}
],

felicidad: [
{pregunta:"¿Capital de Japón?", opciones:["Seúl","Tokio","Pekín","Bangkok"], correcta:1},
{pregunta:"¿Río más largo del mundo?", opciones:["Nilo","Amazonas","Yangtsé","Misisipi"], correcta:1},
{pregunta:"¿País más grande del mundo?", opciones:["China","EEUU","Rusia","Brasil"], correcta:2},
{pregunta:"¿Capital de Italia?", opciones:["Roma","Milán","Venecia","Florencia"], correcta:0},
{pregunta:"¿Desierto más grande?", opciones:["Sahara","Gobi","Atacama","Arabia"], correcta:0},
{pregunta:"¿Capital de Argentina?", opciones:["Buenos Aires","Córdoba","Rosario","Mendoza"], correcta:0},
{pregunta:"¿Montaña más alta?", opciones:["K2","Everest","Aconcagua","Mont Blanc"], correcta:1},
{pregunta:"¿Océano más grande?", opciones:["Atlántico","Índico","Pacífico","Ártico"], correcta:2},
{pregunta:"¿Capital de Brasil?", opciones:["Río","Brasilia","São Paulo","Salvador"], correcta:1},
{pregunta:"¿Continente donde está Egipto?", opciones:["Asia","Europa","África","Oceanía"], correcta:2}
],

resignacion: [
{pregunta:"¿Año inicio Segunda Guerra Mundial?", opciones:["1939","1945","1914","1920"], correcta:0},
{pregunta:"¿Quién descubrió América?", opciones:["Colón","Napoleón","Magallanes","Einstein"], correcta:0},
{pregunta:"¿Imperio de Julio César?", opciones:["Griego","Romano","Persa","Mongol"], correcta:1},
{pregunta:"¿Revolución Francesa año?", opciones:["1776","1789","1810","1917"], correcta:1},
{pregunta:"¿Muro cayó en 1989?", opciones:["Roma","Berlín","China","París"], correcta:1},
{pregunta:"¿Primera guerra mundial inició?", opciones:["1914","1939","1945","1905"], correcta:0},
{pregunta:"¿Civilización de pirámides?", opciones:["Egipcia","Romana","China","India"], correcta:0},
{pregunta:"¿Independencia EEUU año?", opciones:["1776","1800","1820","1750"], correcta:0},
{pregunta:"¿Napoleón era de?", opciones:["Italia","España","Francia","Alemania"], correcta:2},
{pregunta:"¿Imperio Inca estaba en?", opciones:["México","Perú","Brasil","Chile"], correcta:1}
],

vinculos: [
{pregunta:"¿Molécula del agua?", opciones:["CO2","H2O","O2","NaCl"], correcta:1},
{pregunta:"¿Planeta rojo?", opciones:["Marte","Venus","Júpiter","Saturno"], correcta:0},
{pregunta:"¿Fuerza que nos mantiene en la Tierra?", opciones:["Magnetismo","Gravedad","Electricidad","Inercia"], correcta:1},
{pregunta:"¿Órgano que bombea sangre?", opciones:["Pulmón","Hígado","Corazón","Riñón"], correcta:2},
{pregunta:"¿Unidad de energía?", opciones:["Volt","Julio","Metro","Watt"], correcta:1},
{pregunta:"¿Gas que respiramos?", opciones:["CO2","Nitrógeno","Oxígeno","Helio"], correcta:2},
{pregunta:"¿Número de planetas?", opciones:["7","8","9","10"], correcta:1},
{pregunta:"¿Célula es unidad de?", opciones:["Vida","Energía","Átomo","Materia"], correcta:0},
{pregunta:"¿Sol es una?", opciones:["Estrella","Planeta","Galaxia","Nebulosa"], correcta:0},
{pregunta:"¿Velocidad de la luz es?", opciones:["300.000 km/s","150.000 km/s","1.000 km/s","3 km/s"], correcta:0}
],

proyecto: [
{pregunta:"¿Quién pintó la Mona Lisa?", opciones:["Van Gogh","Da Vinci","Picasso","Miguel Ángel"], correcta:1},
{pregunta:"¿Autor de Don Quijote?", opciones:["Cervantes","Shakespeare","Neruda","Borges"], correcta:0},
{pregunta:"¿Movimiento de Dalí?", opciones:["Surrealismo","Realismo","Barroco","Romanticismo"], correcta:0},
{pregunta:"¿Teatro clásico griego ciudad?", opciones:["Roma","Atenas","Esparta","Tebas"], correcta:1},
{pregunta:"¿Escultor David?", opciones:["Miguel Ángel","Rodin","Bernini","Donatello"], correcta:0},
{pregunta:"¿Pintor Guernica?", opciones:["Picasso","Dalí","Goya","Velázquez"], correcta:0},
{pregunta:"¿Autor Hamlet?", opciones:["Shakespeare","Cervantes","Goethe","Dante"], correcta:0},
{pregunta:"¿Arte del siglo XVII europeo?", opciones:["Barroco","Gótico","Renacimiento","Modernismo"], correcta:0},
{pregunta:"¿Museo del Louvre está en?", opciones:["Roma","Madrid","París","Berlín"], correcta:2},
{pregunta:"¿La Odisea fue escrita por?", opciones:["Homero","Platón","Aristóteles","Sócrates"], correcta:0}
],

meteorito: [
{pregunta:"Vuelo sin alas, lloro sin ojos. ¿Qué soy?", opciones:["Nube","Viento","Lluvia","Tiempo"], correcta:2},
{pregunta:"Tengo agujas pero no coso. ¿Qué soy?", opciones:["Reloj","Pino","Erizo","Brújula"], correcta:0},
{pregunta:"Blanca por dentro, verde por fuera. ¿Qué es?", opciones:["Sandía","Pera","Manzana","Melón"], correcta:3},
{pregunta:"Oro parece, plata no es.", opciones:["Plátano","Manzana","Piña","Limón"], correcta:0},
{pregunta:"Cuanto más quitas más grande es.", opciones:["Agujero","Montaña","Río","Sombra"], correcta:0},
{pregunta:"Tiene llaves pero no puertas.", opciones:["Piano","Mapa","Libro","Coche"], correcta:0},
{pregunta:"Corre sin piernas.", opciones:["Río","Perro","Auto","Viento"], correcta:0},
{pregunta:"Sube y baja pero no se mueve.", opciones:["Escalera","Temperatura","Sol","Edad"], correcta:1},
{pregunta:"Tiene cara y manos pero no cuerpo.", opciones:["Reloj","Muñeco","Foto","Espejo"], correcta:0},
{pregunta:"Siempre está delante pero no lo ves.", opciones:["Futuro","Aire","Sombras","Tiempo"], correcta:0}
]

};