let clients = JSON.parse(localStorage.getItem("clients")) || [];
let invoices = JSON.parse(localStorage.getItem("invoices")) || [];

const clientCount = document.getElementById("client-count");
const invoiceCount = document.getElementById("invoice-count");
const totalValue = document.getElementById("total-value");
const paidCount = document.getElementById("paid-count");
const unpaidCount = document.getElementById("unpaid-count");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
