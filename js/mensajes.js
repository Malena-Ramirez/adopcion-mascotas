import { people } from "./datos.js";

const messagesContainer = document.querySelector(".main-messages-container");

const getLastMessage = messages => {
  const lastMessage = messages[messages.length - 1];
  return `
      <span>${lastMessage.time}</span>
    </div>
    <p>${lastMessage.message}</p>
  `;
}

people.forEach(element => {
  const cardAnchor = document.createElement("a");
  cardAnchor.href = `chat.html?id=${element.id}`;
  cardAnchor.innerHTML = `
    <div class="message-container">
      <img src= ${element.img} alt="Imagen de perfil" class="profile-img img-fluid" />
      <div class="message-info-text">
        <div>
          <h2>${element.name}</h2>
          ${getLastMessage(element.messages)}
      </div>
      <img src="img/Vector.svg" alt="Regresar" id="vector">
    </div>`;
  messagesContainer.appendChild(cardAnchor);
});