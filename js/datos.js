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
    luna: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi aut ex, doloremque laboriosam, quidem voluptate numquam deleniti optio ut accusantium odio consequuntur, ipsam ipsa iure. Quisquam vitae fugiat libero."
}

const pets = [
    new Pet("Toby", "./img/toby.jpg", "male", "dog", "Golden retriever", "1 año", [personality.c, personality.t, personality.i], stories.toby, "Pepita Gonzalez"),
    new Pet("Princesa", "./img/princesa.jpg", "female", "dog", "French poodle", "10 meses", [personality.t, personality.i, personality.j], stories.princesa, "Juan Perez"),
    new Pet("Milo", "./img/milo.jpg", "male", "dog", "Jack russell", "2 años", [personality.c, personality.t, personality.j], stories.milo, "Luisa Salas"),
    new Pet("Luna", "./img/luna.jpg", "female", "dog", "Yorkshire terrier", "3 meses", [personality.c, personality.t, personality.i], stories.luna, "Andrea Díaz")
]