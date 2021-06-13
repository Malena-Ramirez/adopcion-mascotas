class Pet {
    constructor({ id, name, img, sex, category, breed, age, address, personality, story, publishedBy }) {
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
    new Pet({ id: 1, name: "Toby", img: "./img/toby.jpg", sex: "male", category: "dog", breed: "Golden retriever", age: "1 año", address: "4140 Parker Rd. Allentown, New Mexico 31134", personality: [personality.c, personality.t, personality.i], story: stories.toby, publishedBy: "Pepita Gonzalez" }),
    new Pet({ id: 2, name: "Princesa", img: "./img/princesa.jpg", sex: "female", category: "dog", breed: "French poodle", age: "10 meses", address: "5107 Parker Rd. Allentown, Barcelona", personality: [personality.t, personality.i, personality.j], story: stories.princesa, publishedBy: "Juan Perez" }),
    new Pet({ id: 3, name: "Milo", img: "./img/milo.jpg", sex: "male", category: "dog", breed: "Jack russell", age: "2 años", address: "3434 Parker Rd. Allentown, Ciudad de México", personality: [personality.c, personality.t, personality.j], story: stories.milo, publishedBy: "Luisa Salas" }),
    new Pet({ id: 4, name: "Luna", img: "./img/luna.jpg", sex: "female", category: "dog", breed: "Yorkshire terrier", age: "3 meses", address: "6150 Parker Rd. Allentown, Madrid 31134", personality: [personality.c, personality.t, personality.i], story: stories.luna, publishedBy: "Andrea Díaz" }),
    new Pet({ id: 5, name: "Coco", img: "./img/coco.jpg", sex: "male", category: "dog", breed: "Border collie", age: "3 meses", address: "1214 Parker Rd. Allentown, Bogotá 31134", personality: [personality.c, personality.t, personality.i], story: stories.coco, publishedBy: "Andres Rodriguez" }),
    new Pet({ id: 6, name: "Teo", img: "./img/teo.jpg", sex: "male", category: "dog", breed: "Labrador", age: "1 año", address: "3146 Parker Rd. Allentown, New Mexico 31134", personality: [personality.c, personality.i, personality.j], story: stories.teo, publishedBy: "Juana Rodriguez" }),
    new Pet({ id: 7, name: "Felix", img: "./img/felix.jpg", sex: "male", category: "cat", breed: "American shorthair", age: "11 meses", address: "4140 Parker Rd. Allentown, Nueva York 31134", personality: [personality.t, personality.i, personality.j], story: stories.felix, publishedBy: "Pepita Gonzalez" }),
    new Pet({ id: 8, name: "Michi", img: "./img/michi.jpg", sex: "male", category: "cat", breed: "British shorthair", age: "2 años", address: "4140 Parker Rd. Allentown, Buenos Aires 31134", personality: [personality.c, personality.t, personality.j], story: stories.michi, publishedBy: "Juan Perez" }),
    new Pet({ id: 9, name: "Lili", img: "./img/lili.jpg", sex: "female", category: "cat", breed: "Persa", age: "1 año", address: "2150 Parker Rd. Allentown, Cartagena 31134", personality: [personality.c, personality.t, personality.j], story: stories.lili, publishedBy: "Luisa Salas" }),
    new Pet({ id: 10, name: "Kity", img: "./img/kity.jpg", sex: "female", category: "cat", breed: "Persa", age: "9 meses", address: "1464 Parker Rd. Allentown, Santiago de Chile 31134", personality: [personality.c, personality.i, personality.j], story: stories.kity, publishedBy: "Andrea Díaz" }),
    new Pet({ id: 11, name: "Sasha", img: "./img/sasha.jpg", sex: "female", category: "cat", breed: "Siames", age: "2 meses", address: "4545 Parker Rd. Allentown, Quito 31134", personality: [personality.c, personality.t, personality.j], story: stories.sasha, publishedBy: "Juana Rodriguez" })
];

export { pets };