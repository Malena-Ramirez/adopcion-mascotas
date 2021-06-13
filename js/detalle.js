import { pets } from "./datos.js";

const params = new URLSearchParams(window.location.search);
const petId = parseInt(params.get("id"));

for (let pet of pets) {
    if (petId === pet.id) {
        console.log(pet);
        const mainSection = document.querySelector("#pet-detail-main");
        mainSection.innerHTML = `<section class="pet-img-container">
        <a href="index.html">
          <img src="img/back.png" alt="Icono para volver atrás" class="back-btn" />
        </a>
        <img src="${pet.img}" alt="Imagen de la mascota" class="img-fluid pet-img" />
      </section>
      <section class="pet-detail-text">
        <div class="pet-name-container">
          <div class="pet-name">
            <h1>${pet.name}</h1>
            <img src="img/${pet.sex}.svg" alt="Sexo de la mascota" />
          </div>
          <div class="favorite-icon"><i class="bi bi-heart-fill"></i></div>
        </div>
        <div class="pet-info-container">
          <div class="pet-breed-container">
            <img src="img/raza.svg" alt="Raza" />
            <p>${pet.breed}</p>
          </div>
          <div class="pet-age-container">
            <img src="img/edad.svg" alt="Edad de la mascota" />
            <p>${pet.age}</p>
          </div>
          <div class="pet-location-container">
            <img src="img/map-pin.svg" alt="Dirección" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="pet-personality-container">
          <h2>Personalidad</h2>
          <div class="img-personality-container">
            <figure>
              <img src="img/cariñoso.svg" alt="Personalidad" />
              <figcaption>Cariñoso</figcaption>
            </figure>
            <figure>
              <img src="img/inquieto.svg" alt="Personalidad" />
              <figcaption>Inquieto</figcaption>
            </figure>
            <figure>
              <img src="img/tierno.svg" alt="Personalidad" />
              <figcaption>Tierno</figcaption>
            </figure>
          </div>
        </div>
        <div class="pet-story-container">
          <h2>Historia de ${pet.name}</h2>
          <p>${pet.story}</p>
        </div>
        <div class="contact-container">
          <div class="profile-contact-container">
            <img src="img/perfil1.jpg" alt="Imagen de perfil" class="profile-img img-fluid" />
            <div>
              <p>Publicado por</p>
              <p class="name-profile-contact">Juan Perez</p>
            </div>
          </div>
          <div class="conctac-btn">
            <a href="chat.html">Contactar</a>
          </div>
        </div>
      </section>
        ` 
        break;
    }
}