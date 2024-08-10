const list = document.getElementById("list");
const sectionCharacters = document.getElementById("section-characters");
const url = "https://apisimpsons.fly.dev/api/personajes?limit=635&page=1";

const textCardsSearched = document.createElement("h5");
textCardsSearched.className = "text-searched";

const btnAllCards = document.createElement("button");
btnAllCards.textContent = "Todos los personajes";
btnAllCards.className = "btn-all-cards";

// Detail elements
const detailElementCharacter = document.getElementById("character");
const detailElementTitle = document.getElementById("character-title");
const detailElementStory = document.getElementById("character-description");
const detailElementImage = document.getElementById("character-image");
const detailElementGenre = document.getElementById("character-genre");
const detailElementState = document.getElementById("character-state");
const detailElementEmployment = document.getElementById("character-employment");
const btnCloseDetail = document.getElementById("btn-close-detail");
const allCardsTitle = document.getElementsByClassName("card-title");
const allCardsState = document.getElementsByClassName("card-state");
const formSearch = document.getElementById("form-search");
const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const footer = document.getElementById("footer");
const containerNavLinks = document.getElementById("container-nav-links");

const searchResultsText = document.getElementById("search-results-text");
searchResultsText.appendChild(textCardsSearched);

const filledDiv = document.getElementById("filled");

for (let i = 0; i < allCardsState.length; i++) {
    if (allCardsState[i].textContent.length > 20) {
        allCardsState[i].style.fontSize = "1rem";
    }
}

if (detailElementTitle.textContent.length > 30) {
    detailElementTitle.style.fontSize = ".2rem !important";
    detailElementTitle.textContent.length = 20;
}

let data;
let characterId;

btnCloseDetail.addEventListener("click", () => {
    detailElementCharacter.classList.remove("section-show");
    detailElementCharacter.classList.add("character-close");
    console.log("Cliked!");
    sectionCharacters.classList.remove("container-mine-close");
    sectionCharacters.classList.add("container-mine-show");
    btnCloseDetail.classList.remove("btn-detail-show");
    formSearch.classList.remove("section-hidden");
    formSearch.classList.add("form-control-show");
    filledDiv.classList.remove("section-show");
    filledDiv.classList.add("section-hidden");
});

let imagesError = [];

async function getData() {
    try {
        // Muestra el spinner
        spinner.classList.remove("spinner-hidden");
        spinner.classList.add("spinner-show");

        // Verificar si ya hay datos almacenados en localStorage
        let storedData = localStorage.getItem("storedCharacters");

        if (storedData) {
            // Si hay datos almacenados, usar esos datos en lugar de hacer otra solicitud
            data = JSON.parse(storedData);
        } else {
            // Si no hay datos almacenados, hacer la solicitud a la API
            const response = await fetch(url);
            data = await response.json();

            // Guardar los datos en localStorage para futuras visitas
            localStorage.setItem("storedCharacters", JSON.stringify(data));
        }

        // Here consume data from the api
        const response = await fetch(url);
        data = await response.json();

        const fragment = document.createDocumentFragment();

        // Here the html cards are created dynamically.
        const cardsPromises = data.docs.map((element) => {
            return new Promise((resolve) => {
                const container = document.createElement("div");
                const link = document.createElement("a");
                const item = document.createElement("h3");
                const item3 = document.createElement("h3");
                const item4 = document.createElement("h3");
                const image = document.createElement("img");
                item.innerText = element.Nombre;

                switch (element._id) {
                    case "63ec25f45d30fabfe4502beb":
                        element.Nombre = "Homero Conductor de Monorriel";
                        element.Estado = "Vivo";
                        element.Ocupacion = "Conductor de Monorriel ";
                        element.Historia =
                            "Homero Simpson se convierte en conductor del monorriel en el episodio “Marge vs. the Monorail” de la cuarta temporada de Los Simpson. Después de ver un anuncio en la televisión, Homero se entusiasma con la idea de ser conductor del monorriel y decide tomar un curso intensivo de tres semanas para aprender a operar el sistema de transporte. Aunque Marge se siente preocupada por la seguridad del monorriel, Homero es nombrado conductor y comienza a trabajar en el sistema.";
                    case "63ec28715d30fabfe4502bf3":
                        element.Estado = "Vivo";
                        element.Ocupacion =
                            "Empleado del DMV Anterior: Guardia de seguridad Anterior: Agente de la CIA";
                }

                item3.innerText = element.Estado;
                item3.className = "card-state";
                item4.innerText = element.Genero;
                item4.className = "card-gender";
                image.src = element.Imagen;

                // If there is not image
                image.onerror = () => {
                    imagesError.push(element);
                };

                const missingImages = {
                    "63e337e7edf49032166d9652":
                        "./assets/img/imagenes-faltantes/larry.webp",
                    "63e455d87de1feab294249c8":
                        "./assets/img/imagenes-faltantes/jefe_de_la_tribu_.png",
                    "63e477937de1feab294269de":
                        "./assets/img/imagenes-faltantes/Sanjay_Nahasapeemapetilon.webp",
                    "63e485aa7de1feab2942740e":
                        "./assets/img/imagenes-faltantes/Mr_Lacost_Tapped_Out.webp",
                    "63e3349cedf49032166d5ed8":
                        "./assets/img/imagenes-faltantes/artie_ziff.png",
                    "63e3298eedf49032166ca2b3":
                        "./assets/img/imagenes-faltantes/superintendente-chalmers.webp",
                    "63ec504f8b142917b4a270dc":
                        "./assets/img/imagenes-faltantes/TemperanceBarrow.webp",
                    "63e57ff66b08a3edb56c252e":
                        "./assets/img/imagenes-faltantes/duncan.png",
                };

                if (missingImages[element._id]) {
                    image.src = missingImages[element._id];
                }

                container.className = "card-container";
                image.className = "card-img";
                item.className = "card-title";
                image.id = element._id;
                item.id = element._id;
                item3.id = element._id;
                item4.id = element._id;
                container.append(item, image, item3, item4);
                container.id = element._id;
                link.append(container);
                link.id = element._id;
                link.className = "card-link-container";
                fragment.append(link);

                resolve();
            });
        });

        await Promise.all(cardsPromises);

        list.appendChild(fragment);
        const links = document.querySelectorAll(".card-link-container");
        const images = document.getElementsByClassName("card-img");
        const cardsTitle = document.getElementsByClassName("card-title");

        const allCards = Array.from(list.children);
        // to change texts size
        for (let i = 0; i < cardsTitle.length; i++) {
            if (cardsTitle[i].textContent.length > 20) {
                cardsTitle[i].style.fontSize = "1.3rem";
            }
            if (cardsTitle[i].textContent.length > 25) {
                cardsTitle[i].style.fontSize = "1rem";
            }
            // if (cardsTitle[i].textContent.length > 30) {
            // 	cardsTitle[i].textContent.substring(0, 27);
            // }
        }

        // to change images size
        for (let i = 0; i < images.length; i++) {
            if (images[i].width > 200) {
                images[i].classList.add("img-limit");
            }
        }

        // To change text states size
        for (let i = 0; i < allCardsState.length; i++) {
            if (allCardsState[i].textContent.length > 20) {
                allCardsState[i].style.fontSize = "1rem";
            }
        }

        document.addEventListener("click", (event) => {
            let eventId = event.target.id;
            let idElement;
            if (eventId.length > 20) {
                idElement = eventId;

                // for (let i = 0; i < links.length; i++) {
                // links[i].href = "/detail.html";
                // }
            }

            if (idElement) {
                detailElementCharacter.classList.remove("character-close");
                detailElementCharacter.classList.add("section-show");
                sectionCharacters.classList.remove("container-mine-show");
                sectionCharacters.classList.add("container-mine-close");
                btnCloseDetail.classList.add("btn-detail-show");
                formSearch.classList.remove("form-control-show");
                formSearch.classList.add("section-hidden");
                filledDiv.classList.remove("section-hidden");
                filledDiv.classList.add("section-show");

                data.docs.forEach((element) => {
                    if (element._id === eventId) {
                        localStorage.setItem("apiID", element._id);
                        console.log(element);
                        detailElementTitle.textContent =
                            "Nombre | " + element.Nombre;
                        detailElementStory.textContent = element.Historia;

                        switch (element._id) {
                            case "63e337e7edf49032166d9652":
                                detailElementImage.src =
                                    "./assets/img/imagenes-faltantes/larry.webp";
                            case "63e455d87de1feab294249c8":
                                detailElementImage.src =
                                    "./assets/img/imagenes-faltantes/jefe_de_la_tribu_.png";
                            case "63e477937de1feab294269de":
                                detailElementImage.src =
                                    "./assets/img/imagenes-faltantes/Sanjay_Nahasapeemapetilon.webp";
                            case "63e3349cedf49032166d5ed8":
                                detailElementImage.src =
                                    "./assets/img/imagenes-faltantes/artie_ziff.png";
                            case "63e3298eedf49032166ca2b3":
                                detailElementImage.src =
                                    "./assets/img/imagenes-faltantes/superintendente-chalmers.webp";
                            case "63ec504f8b142917b4a270dc":
                                detailElementImage.src =
                                    "./assets/img/imagenes-faltantes/TemperanceBarrow.webp";
                            case "63e57ff66b08a3edb56c252e":
                                detailElementImage.src =
                                    "./assets/img/imagenes-faltantes/duncan.png";
                            case "63e485aa7de1feab2942740e":
                                detailElementImage.src =
                                    "./assets/img/imagenes-faltantes/Mr_Lacost_Tapped_Out.webp";
                        }

                        detailElementImage.src = element.Imagen;
                        detailElementGenre.textContent =
                            "Género | " + element.Genero;
                        detailElementState.textContent =
                            "Estado | " + element.Estado;
                        detailElementEmployment.textContent =
                            "Ocupación | " + element.Ocupacion;
                    }
                });
                searchResultsText.textContent = "";
            }
        });

        // ALL CARDS
        const allCardsContainer =
            document.getElementsByClassName("card-container");

        for (let i = 0; i < allCardsContainer.length; i++) {
            allCardsContainer[i].classList.add("appear");
        }

        const elements = document.querySelectorAll(".appear");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    }
                });
            },
            {
                threshold: 0.1, // Ajusta este valor según sea necesario
            }
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        btnSearch.addEventListener("click", (event) => {
            event.preventDefault();
            let searched = inputSearch.value.toLowerCase(); // Para hacer la búsqueda insensible a mayúsculas
            console.log(searched);

            // console.log(allCards);

            // Vaciar el div contenedor
            list.innerHTML = "";

            // Filtrar y mostrar solo las tarjetas que coinciden con la búsqueda
            let found = false;
            for (let card of allCards) {
                let cardTitle = card
                    .querySelector(".card-title")
                    .textContent.toLowerCase(); // Asumiendo que el título tiene la clase 'card-title'
                if (cardTitle.includes(searched)) {
                    searchResultsText.appendChild(textCardsSearched);
                    list.appendChild(card); // Agrega la tarjeta que coincide al contenedor
                    // card.scrollIntoView({
                    // 	behavior: "smooth",
                    // 	block: "center",
                    // });
                    found = true;
                }
                // else {
                // 	found = false;
                // 	list.innerHTML = "";
                // }
            }
            // Si no se encuentra ninguna coincidencia, restaurar todas las tarjetas
            if (!found) {
                textCardsSearched.textContent =
                    "No se encontraron coincidencias...";
            } else {
                textCardsSearched.textContent = `Mostrando todas las coincidencias encontradas(${allCardsContainer.length})...`;
            }

            btnAllCards.classList.remove("section-hidden");
            btnAllCards.classList.add("section-show");
            containerNavLinks.appendChild(btnAllCards);

            btnAllCards.addEventListener("click", () => {
                for (let card of allCards) {
                    list.appendChild(card);
                }

                btnAllCards.classList.add("section-hidden");

                searchResultsText.removeChild(textCardsSearched);
                inputSearch.value = "";
                inputSearch = "";
            });
        });
    } catch (error) {
        alert({ error: error.message });
    } finally {
        // Oculta el spinner
        spinner.classList.remove("spinner-show");
        spinner.classList.add("spinner-hidden");
    }
}

// Execution function
getData();
