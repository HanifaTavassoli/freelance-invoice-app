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

invoiceForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const clientId = clientSelect.value;
  const serviceTitle = document.getElementById("invoice-service").value.trim();
  const description = document
    .getElementById("invoice-description")
    .value.trim();
  const amount = parseFloat(
    document.getElementById("invoice-amount").value.trim()
  );
  const date = document.getElementById("invoice-date").value.trim();

  const client = clients.find((c) => c.id === parseInt(clientId));

  const newInvoice = {
    id: generateUniqueId(),
    client,
    serviceTitle,
    description,
    amount,
    date,
    paid: false,
  };

  invoices.push(newInvoice);

  saveToLocalStorage("invoices", invoices);

  invoiceForm.reset();

  renderInvoices();
});

window.editInvoice = function (id) {
  const invoiceToEdit = invoices.find((invoice) => invoice.id === id);
  if (!invoiceToEdit) {
    alert("Invoice not found!");
    return;
  }

  document.getElementById("invoice-client").value = invoiceToEdit.client.id;
  document.getElementById("invoice-service").value = invoiceToEdit.serviceTitle;
  document.getElementById("invoice-description").value =
    invoiceToEdit.description;
  document.getElementById("invoice-amount").value = invoiceToEdit.amount;
  document.getElementById("invoice-date").value = invoiceToEdit.date;
};
