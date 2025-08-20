let clients = JSON.parse(localStorage.getItem("clients")) || [];
let invoices = JSON.parse(localStorage.getItem("invoices")) || [];

const clientCount = document.getElementById("client-count");
const invoiceCount = document.getElementById("invoice-count");
const totalValue = document.getElementById("total-value");
const paidCount = document.getElementById("paid-count");
const unpaidCount = document.getElementById("unpaid-count");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

function updateSummary() {
  clientCount.textContent = clients.length;
  invoiceCount.textContent = invoices.length;

  const totalInvoiceValue = invoices.reduce(
    (total, invoice) => total + invoice.amount,
    0
  );
  totalValue.textContent = totalInvoiceValue.toFixed(2);

  const paidInvoices = invoices.filter((invoice) => invoice.paid);
  const unpaidInvoices = invoices.filter((invoice) => !invoice.paid);

  paidCount.textContent = paidInvoices.length;
  // unpaidCount.textContent = unpaidInvoices.length;
}

async function loadQuote() {
  try {
    const response = await fetch("data/quotes.json");
    const quotes = await response.json();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author || "- Unknown";
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteText.textContent = "“Stay positive, work hard, make it happen.”";
    quoteAuthor.textContent = "- Unknown";
  }
}

updateSummary();
loadQuote();
