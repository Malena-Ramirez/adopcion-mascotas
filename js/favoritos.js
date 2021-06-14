import { printCards } from "./utils.js";

const petsFavArray = JSON.parse(localStorage.getItem("favorites")) || [];
const petsContainer = document.querySelector("#pets-favs-container");
if (!petsFavArray.length) {
  petsContainer.innerHTML = `
  <p>Aún no has agregado ninguna mascota a favoritos.</p>
  `;
} else {
  petsContainer.innerHTML = `
  <div class="pets-cards-container">
  `;
  petsFavArray.forEach(element => {
    const cardAnchor = printCards(element);
    document.querySelector(".pets-cards-container").appendChild(cardAnchor);
  });
}