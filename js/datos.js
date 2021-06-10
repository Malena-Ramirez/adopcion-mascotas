class Pet{
    constructor(name, img, sex, category, breed, age, address, personality, story, publishedBy){
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
    new Pet("Toby", "./img/toby.jpg", "male", "dog", "Golden retriever", "1 año", [personality.c, personality.t, personality.i], stories.toby, "Pepita Gonzalez"),
    new Pet("Princesa", "./img/princesa.jpg", "female", "dog", "French poodle", "10 meses", [personality.t, personality.i, personality.j], stories.princesa, "Juan Perez"),
    new Pet("Milo", "./img/milo.jpg", "male", "dog", "Jack russell", "2 años", [personality.c, personality.t, personality.j], stories.milo, "Luisa Salas"),
    new Pet("Luna", "./img/luna.jpg", "female", "dog", "Yorkshire terrier", "3 meses", [personality.c, personality.t, personality.i], stories.luna, "Andrea Díaz"),
    new Pet("Coco", "./img/coco.jpg", "male", "dog", "Border collie", "3 meses", [personality.c, personality.t, personality.i], stories.coco, "Andres Rodriguez"),
    new Pet("Teo", "./img/teo.jpg", "male", "dog", "Labrador", "1 año", [personality.c, personality.i, personality.j], stories.teo, "Juana Rodriguez"),
    new Pet("Felix", "./img/felix.jpg", "male", "cat", "American shorthair", "11 meses", [personality.t, personality.i, personality.j], stories.felix, "Pepita Gonzalez"),
    new Pet("Michi", "./img/michi.jpg", "male", "cat", "British shorthair", "2 años", [personality.c, personality.t, personality.j], stories.michi, "Juan Perez"),
    new Pet("Lili", "./img/lili.jpg", "female", "cat", "Persa", "1 año", [personality.c, personality.t, personality.j], stories.lili, "Luisa Salas"),
    new Pet("Kity", "./img/kity.jpg", "female", "cat", "Persa", "9 meses", [personality.c, personality.i, personality.j], stories.kity, "Andrea Díaz"),
    new Pet("Sasha", "./img/sasha.jpg", "female", "cat", "Siames", "2 meses", [personality.c, personality.t, personality.j], stories.sasha, "Juana Rodriguez")
]