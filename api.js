const list = document.getElementById("list");
const btnOverlay = document.getElementById("btn-overlay");
const overlay = document.getElementById("overlay");
const btnCLoseOverlay = document.getElementById("btn-close-overlay");
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
const btnCloseDetail = document.getElementById("btn-close");

if (detailElementTitle.textContent.length > 30) {
	detailElementTitle.style.fontSize = ".2rem !important";
	detailElementTitle.textContent.length = 20;
}

let data;
let characterId;

btnCloseDetail.addEventListener("click", () => {
	detailElementCharacter.classList.remove("show");
	detailElementCharacter.classList.add("character-close");
	console.log("Cliked!");
	sectionCharacters.classList.remove("container-mine-close");
	sectionCharacters.classList.add("container-mine-show");
});

// btnOverlay.addEventListener("click", () => {
// 	overlay.classList.remove("overlay-close");
// 	overlay.classList.add("overlay-show");
// 	sectionCharacters.classList.remove("section-show");
// 	sectionCharacters.classList.add("section-hidden");
// });

// btnCLoseOverlay.addEventListener("click", () => {
// 	overlay.classList.add("overlay-close");
// 	sectionCharacters.classList.remove("section-show");
// 	sectionCharacters.classList.add("section-show");
// });

async function getData() {
	try {
		// Here consume data from the api
		const response = await fetch(url);
		data = await response.json();

		const fragment = document.createDocumentFragment();

		// Here the html cards are created dynamically.
		data.docs.forEach((element) => {
			const container = document.createElement("div");
			const link = document.createElement("a");
			const item = document.createElement("h3");
			const item2 = document.createElement("h3");
			const item3 = document.createElement("h3");
			const item4 = document.createElement("h3");
			const image = document.createElement("img");
			item.innerText = element.Nombre;
			// item2.innerText = element.Ocupacion;
			item3.innerText = element.Estado;
			item3.className = "card-state";
			item4.innerText = element.Genero;
			item4.className = "card-gender";
			image.src = element.Imagen;
			container.className = "card-container";
			image.className = "card-img";
			item.className = "card-title";
			container.append(item, image, item3, item4);
			container.id = element._id;
			link.append(container);
			link.id = element._id;
			link.className = "card-link-container";
			fragment.append(link);
		});
		list.appendChild(fragment);
		const links = document.querySelectorAll(".card-link-container");
		const images = document.getElementsByClassName("card-img");
		const cardsTitle = document.getElementsByClassName("card-title");
		console.log(cardsTitle);

		// to change texts size
		for (let i = 0; i < cardsTitle.length; i++) {
			if (cardsTitle[i].textContent.length > 20) {
				cardsTitle[i].style.fontSize = "1.3rem";
			}
			if (cardsTitle[i].textContent.length > 25) {
				cardsTitle[i].style.fontSize = "1rem";
			}
		}

		// to change images size
		for (let i = 0; i < images.length; i++) {
			if (images[i].width > 200) {
				images[i].classList.add("img-limit");
			}
		}

		document.addEventListener("click", (event) => {
			console.log("Hiciste click en ", event.target);
			console.log("id", event.target.id);
			let eventId = event.target.id;
			let idElement;
			if (eventId.length > 10) {
				idElement = eventId;

				for (let i = 0; i < links.length; i++) {
					// links[i].href = "/detail.html";
				}
			}

			if (idElement) {
				detailElementCharacter.classList.remove("character-close");
				detailElementCharacter.classList.add("show");
				sectionCharacters.classList.remove("container-mine-show");
				sectionCharacters.classList.add("container-mine-close");
				data.docs.forEach((element) => {
					if (element._id === eventId) {
						localStorage.setItem("apiID", element._id);
						console.log(element);
						detailElementTitle.textContent = "Nombre | " + element.Nombre;
						detailElementStory.textContent = "Historia | " + element.Historia;
						detailElementImage.src = element.Imagen;
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
