const list = document.getElementById("list");
const url = "https://apisimpsons.fly.dev/api/personajes?limit=635&page=1";
let data;
let characterId;

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
			item4.innerText = element.Genero;
			image.src = element.Imagen;
			container.className = "card-container";
			image.className = "card-img";
			item.className = "card-title";
			container.append(item, image, item3, item4);
			container.id = element._id;
			link.append(container);
			link.href = "/detail.html";
			link.className = "card-link-container";
			fragment.append(link);
		});
		list.appendChild(fragment);

		document.addEventListener("click", (event) => {
			console.log("Hiciste click en ", event.target);
			console.log("id", event.target.id);
			let eventId = event.target.id;

			if (eventId) {
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
