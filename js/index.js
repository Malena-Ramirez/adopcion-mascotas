const dogsCategoryBtn = document.querySelector(".dogs-container");
const catsCategoryBtn = document.querySelector(".cats-container");

dogsCategoryBtn.addEventListener("click", () => {
    dogsCategoryBtn.classList.remove("inactive-categorie");
    catsCategoryBtn.classList.add("inactive-categorie");
} )

catsCategoryBtn.addEventListener("click", () => {
    catsCategoryBtn.classList.remove("inactive-categorie");
    dogsCategoryBtn.classList.add("inactive-categorie");
} )

