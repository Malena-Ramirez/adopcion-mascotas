const form = document.querySelector("#profile-form");
const editName = document.querySelector(".name-profile");

printHTML = () => {
    const person = JSON.parse(localStorage.getItem("Person"));
    editName.innerHTML = `${person.name} ${person.lastName}`;
}
form.addEventListener("submit", e => {
    e.preventDefault(); 
    const name = document.querySelector("#name").value;
    const lastName = document.querySelector("#last-name").value;
    const email = document.querySelector("#email").value;
    const person = {
        name,
        lastName,
        email
    };
    localStorage.setItem("Person", JSON.stringify(person));
    printHTML();
    // form.reset();
})

document.addEventListener("DOMContentLoaded", printHTML);