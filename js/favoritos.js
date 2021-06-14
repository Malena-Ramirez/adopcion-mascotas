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
    const { id, name, img, breed } = element;
    const cardAnchor = document.createElement("a");
    cardAnchor.href = `detalle-mascota.html?id=${id}`;
    cardAnchor.innerHTML = `
<div class="img-card-container">
  <img src=${img} alt="Imagen de la mascota" class="img-fluid" />
  <div class="gradient"></div>
  <div class="cards-text-container">
    <h3 class="Pet-name">${name}</h3>
    <p class="pet-breed">${breed}</p>
  </div>
</div>`;
    document.querySelector(".pets-cards-container").appendChild(cardAnchor);
  });
}