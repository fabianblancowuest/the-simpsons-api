const sectionData = {
    "topic-story": [
        "James L. Brooks había hablado con Matt Groening sobre la creación de una serie de cortometrajes de animación, que Groening iba a basar en su cómic Life in Hell. Al darse cuenta de que convertir Life in Hell en una animación supondría la rescisión de los derechos de publicación de la obra de su vida, escogió otro enfoque y creó su particular modelo de familia disfuncional, cuyos personajes eran homónimos respecto a los mi de su propia familia excepto en su propio caso, en que se sustituyó a sí mismo por el  y personaje de Bart. Groening ideó a la familia Simpson en el vestíbulo de la ofic Brooks.",
        "La familia Simpson apareció por primera vez en los cortos de El show de Tracey Ullman e 19 de abril de 1987.​ Groening solo presentó unos bocetos básicos a los animadores y asumió que los corregirían en producción. Sin embargo, los animadores se limitaron a seguir su esquema, dando lugar a la cruda apariencia de los personajes de los cortos iniciales.",
        "En 1989 un equipo de productoras adaptó Los Simpson al formato de serie demedia hora para Fox Broadcasting Company. El equipo incluía lo que es la actual compañía de animación Klasky Csupo. Jim Brooks negoció una cláusula con Fox que impedía a esta última interferir en el contenido dela serie.​ Groening dijo que su intención al crear la serie era ofrecer una alternativa a loque llamaba la «basura establecida» que estaban viendo.​ La serie de media hora se estrenó el 17 de diciembre de 1989 con Simpsons Roasting on an Open Fire, un especial de Navidad.​ Some Enchanted Evening fue el primer episodio en producirse pero no se emitió hmayo de 1990 por problemas con la animación.",
        "Los Simpson fue la primera serie de Fox en colocarse en el ranking de las 30 series más vistas. Este éxito hizo que Fox programara Los Simpson en el mismo horar The Cosby Show para hacerle competencia, un cambio que dañó los datos de audiencia de Los Si En 1992, Tracey Ullman demandó a la cadena, argumentando que su show había sido la fuen éxito de Los Simpson y exigiendo a Fox un porcentaje sobre los beneficios de la  petición que fue denegada por los jueces.",
    ],
    "story-characters": [
        'Los Simpson es una familia típica estadounidense que vive en Springfield, una ciudad ficticia de la "América media". Homer, el padre, trabaja como inspec seguridad en la planta de energía nuclear de Springfield en el sector 7G, posición que contrasta con su personalidad descuidada y bufonesca. Está casado con Marge, una estereotípica ama de casa y madre con la cual tiene tres hijos: Bart, un problemático chico de 10 años; Lisa, una precoz activista de 8 años, y Maggie, un bebé que no habla pero se comunica succionando un chupete. La familia posee un perro, Santa/s Little Helper, y un gato, Snowball II; Ambas mascotas han protagonizado algún episodio. A pesar del paso de los años, Los Simpson no envejecen y siguen manteniendo el mismo aspecto que tenían a finales de los 80.',
        "La serie incluye además un nutrido grupo de personajes secundarios: compañeros de trabajo,profesores, otros familiares, amigos de la familia, gela ciudad y estrellas locales.SegúnMatt Groening, la serie tomó la idea de incluir un gran reparto de la telecomedia canadienseSecondCity Television.",
    ],
    scenery: [
        'Los Simpson tiene lugar en la ficticia ciudad estadounidense de Springfield, sin coordenadas geográficas o localizaciones concretas que permitan conocer en qué estado de Estados Unidos se encuentra. A pesar de esto, los fans de la serie han tratado de identificar la localización de la ciudad prestando atención al paisaje, vecindario, marcas geográficas y otras pistas. Como respuesta, la serie se muestra intencionalmente evasiva a facilitar la localización. El nombre "Springfield" es tan común en Estados Unidos que aparece en la mitad de los estados. La geografía de Springfield y alrededores contiene costas desiertos, zonas agrícolas extensas, altas montañas y cualquier elemento necesario para el desarrollo del argumento o de los chistes. De todas formas, Groening ha dicho que Springfield tiene mucho en común con Portland, Oregon, la ciudad donde creció.',
        'La familia Simpson vive en el 742 de Evergreen Terrace (en Hispanoamérica: Avenida Siempreviva 742), Springfield, en honor a la calle donde vivía Matt Groening cuando era niño. Se dan varios números alternativos de la casa Simpson en varios episodios, entre ellos: 59 "Lisa Goes to Washington"), 94 ("Blood Feud" y "Bart, el amante"), 723 ("Homer the Vigilante"), 743 ("Beyond Blunderdome") y 1094 ("New Kid on the Block"), además de "Spalding Way 430" ("Kamp Krusty"). El hecho se usa repetidamente para evitar ubicar específicamente a Springfield so mapa de los Estados Unidos. Se ha sugerido que la dirección usada en /Kamp Krusty/ apunta al actor y comediante Spalding Gray.',
    ],
    topics: [
        "Los Simpson usa la fórmula de la comedia de situación o sitcom. Se centra en las aventuras de una familia media estadounidense. Sin embargo, dado su carácter de animación, el ámbito es mayor que el de una comedia de situación común. La ciudad de Springfield actúa como un universo completo que permite a los personajes enfrentarse a los problemas de la sociedad moderna. El tener a Homer trabajando en una central nuclear permite comentar el estado del medio ambiente. Seguir los años de Bart y Lisa por la Escuela Primaria de Springfield permite a los guionistas de la serie ilustrar asuntos controvertidos sobre el tema de la educación. La ciudad posee, además, un amplio número emisoras de televisión que permite a los realizadores hacer chistes sobre sí mismos y el mundo del entretenimiento.",
        "Algunos comentaristas han notado que la serie es política en su naturaleza y susceptible de un sesgo de izquierdas. Al Jean admitió en una entrevista que «Nosotros [la serie] somos de inclinación liberal». Los guionistas a menudo evidencian su inclinación por ideas progresistas, aunque hacen chistes con todo el espectro político. La serie, a menudo, presenta gobiernos y grandes empresas como entidades insensibles dispuestas a aprovecharse del trabajador medio. Por tanto, los guionistas frecuentemente presentan a las figuras de la autoridad con una luz oscura y desfavorable. En Los Simpson, los políticos son corruptos, los ministros eclesiásticos como Reverend Lovejoy se muestran indiferentes hacia los feligreses y los policías locales son unos incompetentes.",
        "La religión es otro de los temas principales; en tiempos de crisis, la familia frecuentemente vuelve sus ojos a Dios, y la serie se ha ocupado de la mayoría de las religiones mayoritarias (como el cristianismo, judaísmo o hinduismo, entre otras).",
    ],
};

document.addEventListener("DOMContentLoaded", function () {
    Object.keys(sectionData).forEach((sectionId) => {
        // Accedemos a los elementos de la sección en el DOM
        const sectionItems = document.querySelectorAll(
            `#${sectionId} .story-item`
        );
        const sectionContent = sectionData[sectionId];

        // Obtenemos el contenido correspondiente a la sección
        sectionItems.forEach((item, index) => {
            if (item.tagName !== "IMG") {
                item.textContent = sectionContent[index];
            } else {
                console.log("nada");
            }
        });
    });

    const btnStoryMobile = document.getElementById("nav-story-mobile");
    const navStoryMenu = document.getElementById("nav-story");

    btnStoryMobile.addEventListener("click", () => {
        console.log("click");
        navStoryMenu.classList.toggle("show-menu");
    });
});
