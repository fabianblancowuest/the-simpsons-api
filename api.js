const list = document.getElementById("list");
async function getData() {
	const response = await fetch(
		"https://apisimpsons.fly.dev/api/personajes?limit=635&page=1",
	);
	const data = await response.json();

	const fragment = document.createDocumentFragment();

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
		container.append(item, image, item3, item4);
		fragment.append(container);
	});
	list.appendChild(fragment);
}

getData();
