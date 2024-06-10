document.addEventListener("DOMContentLoaded", function () {
	// Tu código JavaScript aquí
	const links = document.getElementsByClassName("nav-link");
	// To detect the active link
	const currentPageUrl = window.location.href;

	for (let i = 0; i < links.length; i++) {
		const linkUrl = links[i].href;

		if (currentPageUrl === linkUrl) {
			links[i].classList.add("active-link");
		}

		console.log(links[i]);
	}
});
