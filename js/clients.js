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

window.editClient = function (id) {
  const clientToEdit = clients.find((client) => client.id === id);
  if (!clientToEdit) {
    alert("Client not found!");
    return;
  }

  document.getElementById("client-name").value = clientToEdit.name;
  document.getElementById("client-email").value = clientToEdit.email;
  document.getElementById("client-company").value = clientToEdit.company;
  document.getElementById("client-notes").value = clientToEdit.notes || "";

  const submitButton = clientForm.querySelector('button[type="submit"]');
  submitButton.textContent = "Update Client";

  clientForm.onsubmit = function (e) {
    e.preventDefault();

    const updatedEmail = document.getElementById("client-email").value.trim();
    const updatedName = document.getElementById("client-name").value.trim();
    const updatedCompany = document
      .getElementById("client-company")
      .value.trim();
    const updatedNotes = document.getElementById("client-notes").value.trim();

    clientToEdit.name = updatedName;
    clientToEdit.email = updatedEmail;
    clientToEdit.company = updatedCompany;
    clientToEdit.notes = updatedNotes;

    clients = clients.filter(
      (client) =>
        client.name !== "" && client.email !== "" && client.company !== ""
    );

    saveToLocalStorage("clients", clients);

    clientForm.reset();
    submitButton.textContent = "Add Client";

    renderClients();
  };
};
