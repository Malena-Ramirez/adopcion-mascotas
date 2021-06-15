import { people } from "./datos.js";

const params = new URLSearchParams(window.location.search);
const selectedChatId = parseInt(params.get("id"));
console.log(selectedChatId);

for (let person of people) {
  if (selectedChatId === person.id) {
    const imgChatContainer = document.querySelector(".img-chat-container");
    imgChatContainer.innerHTML = `
      <img src=${person.img} alt="Imagen de perfil" class="profile-img" />
      <h1>${person.name}</h1>
    `;
    const chatContainer = document.querySelector(".chat-container");
    person.messages.forEach(element => {
      const messageContainer = document.createElement("div");
      messageContainer.className = "message";
      if (element.type === "sent") {
        messageContainer.classList.add("sent-message");
      } else {
        messageContainer.classList.add("received-message");
      }
      messageContainer.innerHTML = `
        <span>${element.time}</span>
        <p>${element.message}</p>
      `;
      chatContainer.appendChild(messageContainer);
    });
  }
}