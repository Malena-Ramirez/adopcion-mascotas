const petsFavArray = JSON.parse(localStorage.getItem("favorites"));
const petsContainer = document.querySelector("#pets-favs-container");
console.log(petsFavArray);
if (!petsFavArray.length) {
  petsContainer.innerHTML = `
  <p>Aún no has agregado ninguna mascota a favoritos.</p>
  `
} else {
  console.log("está lleno")
}