import { pets } from "./datos.js";

const categories = document.querySelectorAll(".pet-category");

categories.forEach(element => {
    element.addEventListener("click", e => {
        categories.forEach(category => category.classList.remove("active-category"));
        element.classList.add("active-category");
        const { category: selectedCategory } = e.target.closest("li").dataset;
        const cardsContainer = document.querySelector(".pets-cards-container");
        cardsContainer.innerHTML = "";
        pets.forEach(element => {
            const { category, id, name, img, breed } = element;
            if (selectedCategory === category) {
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
});