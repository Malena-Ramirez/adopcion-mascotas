import { pets } from "./datos.js";

const categories = document.querySelectorAll(".pet-category");

categories.forEach(element => {
    element.addEventListener

    
});
dogsCategoryBtn.addEventListener("click", () => {
    dogsCategoryBtn.classList.remove("inactive-category");
    catsCategoryBtn.classList.add("inactive-category");
})

catsCategoryBtn.addEventListener("click", () => {
    catsCategoryBtn.classList.remove("inactive-category");
    dogsCategoryBtn.classList.add("inactive-category");
})

const cardsContainer = document.querySelector(".pets-cards-container");

dogsCategoryBtn.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    pets.forEach(element => {
        const { category, id, name, img, breed } = element;
        if (category === "dog") {
            const cardAnchor = document.createElement("a");
            cardAnchor.href = `detalle-mascota.html?id=${id}`;
            cardAnchor.innerHTML = `<div class="img-card-container">
                <img src=${img} alt="Imagen de la mascota" class="img-fluid" />
                <div class="gradient"></div>
                <div class="cards-text-container">
                    <h3 class="Pet-name">${name}</h3>
                    <p class="pet-breed">${breed}</p>
                </div>
            </div>`;
            cardsContainer.appendChild(cardAnchor);
        }
    });
})

catsCategoryBtn.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    pets.forEach(element => {
        if (element.category === "cat") {
            const cardAnchor = document.createElement("a");
            cardAnchor.href = "detalle-mascota.html";
            cardAnchor.innerHTML = `<a href="detalle-mascota.html">
            <div class="img-card-container">
                <img src=${element.img} alt="Imagen de la mascota" class="img-fluid" />
                <div class="gradient"></div>
                <div class="cards-text-container">
                    <h3 class="Pet-name">${element.name}</h3>
                    <p class="pet-breed">${element.breed}</p>
                </div>
            </div>
        </a>`;
            cardsContainer.appendChild(cardAnchor);
        }
    });
})