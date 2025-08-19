import {
  saveToLocalStorage,
  renderTableRows,
  createClientRow,
  generateUniqueId,
} from "./utils.js";

let clients = JSON.parse(localStorage.getItem("clients")) || [];

const clientForm = document.getElementById("client-form");
const clientList = document
  .getElementById("client-list")
  .getElementsByTagName("tbody")[0];

function renderClients() {
  renderTableRows(clients, clientList, createClientRow);
}

clientForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("client-name").value.trim();
  const email = document.getElementById("client-email").value.trim();
  const company = document.getElementById("client-company").value.trim();
  const notes = document.getElementById("client-notes").value.trim();

  const newClient = {
    id: generateUniqueId(),
    name,
    email,
    company,
    notes,
  };

  clients.push(newClient);

  saveToLocalStorage("clients", clients);

  clientForm.reset();

  renderClients();
});
