import {
  saveToLocalStorage,
  renderTableRows,
  createInvoiceRow,
  generateUniqueId,
} from "./utils.js";

let invoices = JSON.parse(localStorage.getItem("invoices")) || [];
let clients = JSON.parse(localStorage.getItem("clients")) || [];
