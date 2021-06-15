import { people } from "./datos.js";

const params = new URLSearchParams(window.location.search);
const selectedPersonId = parseInt(params.get("id"));

for (let person of people) {
  if (selectedPersonId === person.id) {
    const imgChatContainer = document.querySelector(".img-chat-container");
    imgChatContainer.innerHTML = `
      <img src=${person.img} alt="Imagen de perfil" class="profile-img" />
      <h1>${person.name}</h1>
    `;
    const chatContainer = document.querySelector(".chat-container");
    person.messages.forEach(element => {
      const messageContainer = document.createElement("div");
      messageContainer.className = "message";
      messageContainer.classList.add(element.type === "sent" ? "sent-message" : "received-message");
      messageContainer.innerHTML = `
        <span>${element.time}</span>
        <p>${element.message}</p>
      `;
      chatContainer.appendChild(messageContainer);
    });
    break;
  }
}