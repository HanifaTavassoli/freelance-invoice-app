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
