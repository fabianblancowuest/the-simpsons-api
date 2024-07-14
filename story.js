const sectionStory = [
    "James L. Brooks había hablado con Matt Groening sobre la creación de una serie de cortometrajes de animación, que Groening iba a basar en su cómic Life in Hell. Al darse cuenta de que convertir Life in Hell en una animación supondría la rescisión de los derechos de publicación de la obra de su vida, escogió otro enfoque y creó su particular modelo de familia disfuncional, cuyos personajes eran homónimos respecto a los mi de su propia familia excepto en su propio caso, en que se sustituyó a sí mismo por el  y personaje de Bart. Groening ideó a la familia Simpson en el vestíbulo de la ofic Brooks.",
    "La familia Simpson apareció por primera vez en los cortos de El show de Tracey Ullman e 19 de abril de 1987.​ Groening solo presentó unos bocetos básicos a los animadores y asumió que los corregirían en producción. Sin embargo, los animadores se limitaron a seguir su esquema, dando lugar a la cruda apariencia de los personajes de los cortos iniciales.",
    "En 1989 un equipo de productoras adaptó Los Simpson al formato de serie demedia hora para Fox Broadcasting Company. El equipo incluía lo que es la actual compañía de animación Klasky Csupo. Jim Brooks negoció una cláusula con Fox que impedía a esta última interferir en el contenido dela serie.​ Groening dijo que su intención al crear la serie era ofrecer una alternativa a loque llamaba la «basura establecida» que estaban viendo.​ La serie de media hora se estrenó el 17 de diciembre de 1989 con Simpsons Roasting on an Open Fire, un especial de Navidad.​ Some Enchanted Evening fue el primer episodio en producirse pero no se emitió hmayo de 1990 por problemas con la animación.",
    "Los Simpson fue la primera serie de Fox en colocarse en el ranking de las 30 series más vistas. Este éxito hizo que Fox programara Los Simpson en el mismo horar The Cosby Show para hacerle competencia, un cambio que dañó los datos de audiencia de Los Si En 1992, Tracey Ullman demandó a la cadena, argumentando que su show había sido la fuen éxito de Los Simpson y exigiendo a Fox un porcentaje sobre los beneficios de la  petición que fue denegada por los jueces.",
];

const sectionCharacters = [
    'Los Simpson es una familia típica estadounidense que vive en Springfield, una ciudad ficticia de la "América media". Homer, el padre, trabaja como inspec seguridad en la planta de energía nuclear de Springfield en el sector 7G, posición que contrasta con su personalidad descuidada y bufonesca. Está casado con Marge, una estereotípica ama de casa y madre con la cual tiene tres hijos: Bart, un problemático chico de 10 años; Lisa, una precoz activista de 8 años, y Maggie, un bebé que no habla pero se comunica succionando un chupete. La familia posee un perro, Santa/s Little Helper, y un gato, Snowball II; Ambas mascotas han protagonizado algún episodio. A pesar del paso de los años, Los Simpson no envejecen y siguen manteniendo el mismo aspecto que tenían a finales de los 80.',
    "La serie incluye además un nutrido grupo de personajes secundarios: compañeros de trabajo,profesores, otros familiares, amigos de la familia, gela ciudad y estrellas locales.SegúnMatt Groening, la serie tomó la idea de incluir un gran reparto de la telecomedia canadienseSecondCity Television.",
];

const topicStory = document.getElementById("topic-story");
const topicStoryItems = topicStory.getElementsByClassName("story-item");
const storyCharacters = document.querySelectorAll(
    "#story-characters .story-item"
);

for (let i = 0; i < topicStoryItems.length; i++) {
    if (topicStoryItems[i].tagName === "IMG") {
        console.log("nada");
    } else {
        topicStoryItems[i].textContent = sectionStory[i];
    }
}

for (let i = 0; i < sectionCharacters.length; i++) {
    if (storyCharacters[i].tagName === "IMG") {
        console.log("nada");
    } else {
        storyCharacters[i].textContent = sectionCharacters[i];
    }
}

console.log(sectionStory.length);
console.log(topicStoryItems.length);
console.log(storyCharacters);
