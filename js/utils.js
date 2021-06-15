export const printCards = element => {
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
  return cardAnchor;
}

