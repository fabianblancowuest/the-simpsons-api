const list = document.getElementById("list");
const btnOverlay = document.getElementById("btn-overlay");
const overlay = document.getElementById("overlay");
const btnCLoseOverlay = document.getElementById("btn-close-overlay");
const sectionCharacters = document.getElementById("section-characters");
const url = "https://apisimpsons.fly.dev/api/personajes?limit=635&page=1";

let data;
let characterId;
const obj = {
	name: "",
	genre: "",
	state: "",
	employment: "",
	story: "",
};

btnOverlay.addEventListener("click", () => {
	overlay.classList.remove("overlay-close");
	overlay.classList.add("overlay-show");
	sectionCharacters.classList.remove("section-show");
	sectionCharacters.classList.add("section-hidden");
});

btnCLoseOverlay.addEventListener("click", () => {
	overlay.classList.add("overlay-close");
	sectionCharacters.classList.remove("section-show");
	sectionCharacters.classList.add("section-show");
});

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
					links[i].href = "/detail.html";
				}
			}

			if (idElement) {
				data.docs.forEach((element) => {
					if (element._id === eventId) {
						localStorage.setItem("apiID", element._id);
						console.log(element);
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
