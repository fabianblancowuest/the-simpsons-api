const list = document.getElementById("list");
const link = document.getElementById("link");
async function getData() {
	try {
		// Here consume data from the api
		const response = await fetch(
			"https://apisimpsons.fly.dev/api/personajes?limit=635&page=1",
		);
		const data = await response.json();

		const fragment = document.createDocumentFragment();

		// Here the html cards are created dynamically.
		data.docs.forEach((element) => {
			const container = document.createElement("div");
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
			container.id = element._id;
			container.append(item, image, item3, item4);
			link.append(container);
			fragment.append(link);
		});
		list.appendChild(fragment);
	} catch (error) {
		alert({ error: error.message });
	}
}

// Execution function
getData();
