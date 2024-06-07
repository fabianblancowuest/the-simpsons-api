const list = document.getElementById("list");
const sectionCharacters = document.getElementById("section-characters");
const url = "https://apisimpsons.fly.dev/api/personajes?limit=635&page=1";

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
});

let imagesError = [];

async function getData() {
	try {
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

				if (element._id === "63ec28715d30fabfe4502bf3") {
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

		const imagesRoutes = [
			"./assets/img/imagenes-faltantes/larry.webp",
			"./assets/img/imagenes-faltantes/jefe de la tribu .jpeg",
		];

		list.appendChild(fragment);
		const links = document.querySelectorAll(".card-link-container");
		const images = document.getElementsByClassName("card-img");
		const cardsTitle = document.getElementsByClassName("card-title");
		console.log(cardsTitle);
		console.log(imagesError);

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
			console.log("Hiciste click en ", event.target);
			console.log("id", event.target.id);
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
				data.docs.forEach((element) => {
					if (element._id === eventId) {
						localStorage.setItem("apiID", element._id);
						console.log(element);
						detailElementTitle.textContent = "Nombre | " + element.Nombre;
						detailElementStory.textContent = element.Historia;
						detailElementImage.src = element.Imagen;
						// // elementos con imágenes faltantes
						// for (let i = 0; i < imagesError.length; i++) {
						// 	if(imagesError[i].Nombre)
						// }

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
						}

						detailElementGenre.textContent = "Género | " + element.Genero;
						detailElementState.textContent = "Estado | " + element.Estado;
						detailElementEmployment.textContent =
							"Ocupación | " + element.Ocupacion;
					}
				});
			}
		});
	} catch (error) {
		alert({ error: error.message });
	}
}

// Execution function
getData();

export { getData, characterId };
