import { pets } from "./datos.js";
import { printCards } from "./utils.js";

const categories = document.querySelectorAll(".pet-category");

categories.forEach(element => {
    element.addEventListener("click", e => {
        categories.forEach(category => category.classList.remove("active-category"));
        element.classList.add("active-category");
        const { category: selectedCategory } = e.target.closest("li").dataset;
        const cardsContainer = document.querySelector(".pets-cards-container");
        cardsContainer.innerHTML = "";
        pets.forEach(element => {
            const { category } = element;
            if (selectedCategory === category) {
                const cardAnchor = printCards(element);
                cardsContainer.appendChild(cardAnchor);
            }
        });
    })
});