// Cambiar el color los enlaces de la nav y también deshabilitarlos

document.addEventListener("DOMContentLoaded", function () {
    // Para rotar la imagen del nav
    const navLogo = document.getElementById("nav-logo");

    setInterval(() => {
        navLogo.classList.toggle("rotate");
    }, 3000);

    const links = document.getElementsByClassName("nav-link");
    // To detect the active link
    const currentPageUrl = window.location.href;

    // Obtener la URL actual
    const currentURL = window.location.pathname;

    for (let i = 0; i < links.length; i++) {
        const linkUrl = links[i].href;

        if (currentPageUrl === linkUrl) {
            links[i].classList.add("active-link");
            links[i].style.cursor = "not-allowed";
            links[i].disabled = true;
        }

        const tempAnchor = document.createElement("a");
        tempAnchor.href = links[i].href;

        if (tempAnchor.pathname === currentURL) {
            // Si la ruta coincide, deshabilitar el enlace
            links[i].classList.add("disabled-link");
            links[i].removeAttribute("href");
        }

        console.log(links[i]);
    }
});

// Video Intro
// document.addEventListener("DOMContentLoaded", function () {
//     const opening = document.getElementById("opening");
//     const btnStart = document.getElementById("btn-start");
//     const video = document.getElementById("video");
//     const skipButton = document.getElementById("skip-button");
//     const sectionCharacters = document.getElementById("section-characters");
//     const title = document.getElementById("title");
//     const nav = document.getElementById("nav");
//     const footer = document.getElementById("footer");
//     const btnDetailContainer = document.getElementById("btn-detail-container");

//     let videoPlayedOnce = false;

//     btnStart.addEventListener("click", () => {
//         if (videoPlayedOnce) {
//             console.log(
//                 "El video ya se ha reproducido. Mostrando contenido directamente."
//             );
//             showContent();
//         } else {
//             console.log("Iniciando la reproducción del video.");
//             sectionCharacters.classList.add("section-hidden");
//             video.play();
//             video.currentTime = 0;
//             btnStart.classList.add("section-hidden");
//             skipButton.style.display = "block";
//         }
//     });

//     skipButton.addEventListener("click", () => {
//         video.pause();
//         videoPlayedOnce = true;
//         showContent();
//     });

//     video.addEventListener("ended", () => {
//         videoPlayedOnce = true;
//         showContent();
//     });

//     function showContent() {
//         opening.classList.add("section-hidden");
//         sectionCharacters.classList.remove("section-hidden");
//         sectionCharacters.classList.add("section-show");
//         title.classList.remove("section-hidden");
//         title.classList.add("section-show");
//         footer.classList.remove("section-hidden");
//         footer.classList.add("section-show");
//         nav.classList.remove("section-hidden");
//         nav.classList.add("section-show");
//         btnDetailContainer.classList.remove("section-hidden");
//         btnDetailContainer.classList.add("section-show");
//     }
// });
