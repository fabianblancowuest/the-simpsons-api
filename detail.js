const url = "https://apisimpsons.fly.dev/api/personajes?limit=635&page=1";

const detailElementCharacter = document.getElementById("character");
const detailElementTitle = document.getElementById("character-title");
const detailElementStory = document.getElementById("character-description");
const detailElementImage = document.getElementById("character-image");
const detailElementGenre = document.getElementById("character-genre");
const detailElementState = document.getElementById("character-state");
const detailElementEmployment = document.getElementById("character-employment");
// Detail elements

const apiID = localStorage.getItem("apiID");

console.log(apiID);

if (detailElementTitle.textContent.length > 30) {
	detailElementTitle.style.fontSize = ".2rem !important";
	detailElementTitle.textContent.length = 20;
}

fetch(url)
	.then((response) => response.json())
	.then((data) =>
		data.docs.forEach((element) => {
			if (element._id === apiID) {
				detailElementTitle.textContent += element.Nombre;
				detailElementStory.textContent = element.Historia;
				detailElementImage.src = element.Imagen;
				detailElementGenre.textContent += element.Genero;
				detailElementState.textContent += element.Estado;
				detailElementEmployment.textContent += element.Ocupacion;
			}
		}),
	);

if (detailElementTitle.textContent.length > 30) {
	detailElementTitle.style.fontSize = ".2rem !important";
	detailElementTitle.textContent.length = 20;
}
