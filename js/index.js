class Pet {
    constructor(id, name, img, sex, category, breed, age, address, personality, story, publishedBy) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.sex = sex;
        this.category = category;
        this.breed = breed;
        this.age = age;
        this.address = address;
        this.personality = personality;
        this.story = story;
        this.publishedBy = publishedBy;
    }
}

const personality = {
    c: "Cariñoso",
    t: "Tierno",
    i: "Inquieto",
    j: "Jugueton"
}

const stories = {
    toby: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi aut ex, doloremque laboriosam, quidem voluptate numquam deleniti optio ut accusantium odio consequuntur, ipsam ipsa iure. Quisquam vitae fugiat libero.",
    princesa: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi aut ex, doloremque laboriosam, quidem voluptate numquam deleniti optio ut accusantium odio consequuntur, ipsam ipsa iure. Quisquam vitae fugiat libero.",
    milo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi aut ex, doloremque laboriosam, quidem voluptate numquam deleniti optio ut accusantium odio consequuntur, ipsam ipsa iure. Quisquam vitae fugiat libero.",
    luna: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi aut ex, doloremque laboriosam, quidem voluptate numquam deleniti optio ut accusantium odio consequuntur, ipsam ipsa iure. Quisquam vitae fugiat libero.",
    coco: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi aut ex, doloremque laboriosam, quidem voluptate numquam deleniti optio ut accusantium odio consequuntur, ipsam ipsa iure. Quisquam vitae fugiat libero.",
    teo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi aut ex, doloremque laboriosam, quidem voluptate numquam deleniti optio ut accusantium odio consequuntur, ipsam ipsa iure. Quisquam vitae fugiat libero.",
    felix: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi aut ex, doloremque laboriosam, quidem voluptate numquam deleniti optio ut accusantium odio consequuntur, ipsam ipsa iure. Quisquam vitae fugiat libero.",
    michi: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi aut ex, doloremque laboriosam, quidem voluptate numquam deleniti optio ut accusantium odio consequuntur, ipsam ipsa iure. Quisquam vitae fugiat libero.",
    lili: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi aut ex, doloremque laboriosam, quidem voluptate numquam deleniti optio ut accusantium odio consequuntur, ipsam ipsa iure. Quisquam vitae fugiat libero.",
    kity: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi aut ex, doloremque laboriosam, quidem voluptate numquam deleniti optio ut accusantium odio consequuntur, ipsam ipsa iure. Quisquam vitae fugiat libero.",
    sasha: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi aut ex, doloremque laboriosam, quidem voluptate numquam deleniti optio ut accusantium odio consequuntur, ipsam ipsa iure. Quisquam vitae fugiat libero."
}

const pets = [
    new Pet(1, "Toby", "./img/toby.jpg", "male", "dog", "Golden retriever", "1 año", [personality.c, personality.t, personality.i], stories.toby, "Pepita Gonzalez"),
    new Pet(2, "Princesa", "./img/princesa.jpg", "female", "dog", "French poodle", "10 meses", [personality.t, personality.i, personality.j], stories.princesa, "Juan Perez"),
    new Pet(3, "Milo", "./img/milo.jpg", "male", "dog", "Jack russell", "2 años", [personality.c, personality.t, personality.j], stories.milo, "Luisa Salas"),
    new Pet(4, "Luna", "./img/luna.jpg", "female", "dog", "Yorkshire terrier", "3 meses", [personality.c, personality.t, personality.i], stories.luna, "Andrea Díaz"),
    new Pet(5, "Coco", "./img/coco.jpg", "male", "dog", "Border collie", "3 meses", [personality.c, personality.t, personality.i], stories.coco, "Andres Rodriguez"),
    new Pet(6, "Teo", "./img/teo.jpg", "male", "dog", "Labrador", "1 año", [personality.c, personality.i, personality.j], stories.teo, "Juana Rodriguez"),
    new Pet(7, "Felix", "./img/felix.jpg", "male", "cat", "American shorthair", "11 meses", [personality.t, personality.i, personality.j], stories.felix, "Pepita Gonzalez"),
    new Pet(8, "Michi", "./img/michi.jpg", "male", "cat", "British shorthair", "2 años", [personality.c, personality.t, personality.j], stories.michi, "Juan Perez"),
    new Pet(9, "Lili", "./img/lili.jpg", "female", "cat", "Persa", "1 año", [personality.c, personality.t, personality.j], stories.lili, "Luisa Salas"),
    new Pet(10, "Kity", "./img/kity.jpg", "female", "cat", "Persa", "9 meses", [personality.c, personality.i, personality.j], stories.kity, "Andrea Díaz"),
    new Pet(11, "Sasha", "./img/sasha.jpg", "female", "cat", "Siames", "2 meses", [personality.c, personality.t, personality.j], stories.sasha, "Juana Rodriguez")
];

const dogsCategoryBtn = document.querySelector(".dogs-container");
const catsCategoryBtn = document.querySelector(".cats-container");

dogsCategoryBtn.addEventListener("click", () => {
    dogsCategoryBtn.classList.remove("inactive-categorie");
    catsCategoryBtn.classList.add("inactive-categorie");
})

catsCategoryBtn.addEventListener("click", () => {
    catsCategoryBtn.classList.remove("inactive-categorie");
    dogsCategoryBtn.classList.add("inactive-categorie");
})

const cardsContainer = document.querySelector(".pets-cards-container");

dogsCategoryBtn.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    pets.forEach(element => {
        const { category, id, name, img, breed } = element;
        if (category === "dog") {
            const cardAnchor = document.createElement("a");
            cardAnchor.href = "detalle-mascota.html";
            cardAnchor.innerHTML = `<a href="detalle-mascota.html?id=${id}">
            <div class="img-card-container">
                <img src=${img} alt="Imagen de la mascota" class="img-fluid" />
                <div class="gradient"></div>
                <div class="cards-text-container">
                    <h3 class="Pet-name">${name}</h3>
                    <p class="pet-breed">${breed}</p>
                </div>
            </div>
        </a>`;
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