import {
  saveToLocalStorage,
  renderTableRows,
  createInvoiceRow,
  generateUniqueId,
} from "./utils.js";

let invoices = JSON.parse(localStorage.getItem("invoices")) || [];
let clients = JSON.parse(localStorage.getItem("clients")) || [];

const invoiceForm = document.getElementById("invoice-form");
const invoiceList = document
  .getElementById("invoice-list")
  .getElementsByTagName("tbody")[0];
const clientSelect = document.getElementById("invoice-client");

function renderInvoices() {
  renderTableRows(invoices, invoiceList, createInvoiceRow);
}
