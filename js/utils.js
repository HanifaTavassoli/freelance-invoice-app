function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function renderTableRows(data, tbodyElement, renderRow) {
  tbodyElement.innerHTML = "";

  data.forEach((item) => {
    const row = renderRow(item);
    tbodyElement.appendChild(row);
  });
}

function createClientRow(client) {
  const row = document.createElement("tr");

  row.innerHTML = `

    <td>${client.name}</td>
    <td>${client.email}</td>
    <td>${client.company}</td>
    <td>${client.notes || "N/A"}</td>
    <td>
      <button class="btn btn-edit" onclick="editClient(${
        client.id
      })">  <i class="bi bi-pen text-success"></i></button>
      <button class="btn btn-delete" onclick="deleteClient(${
        client.id
      })"><i class="bi bi-x-circle text-danger"></i></button>
    </td>
  `;

  return row;
}

function createInvoiceRow(invoice) {
  const row = document.createElement("tr");

  const clientName = invoice.client ? invoice.client.name : "Unknown Client";

  row.innerHTML = `
    <td>${clientName}</td>
    <td>${invoice.serviceTitle}</td>
    <td>${invoice.description}</td>
    <td>$${invoice.amount}</td>
    <td>${invoice.date}</td>
    <td >${invoice.paid ? "PAID" : "UNPAID"}</td>
    <td>
      <button class="btn btn-edit" onclick="editInvoice(${
        invoice.id
      })"><i class="bi bi-pen text-success"></i></button>
      <button class="btn btn-delete" onclick="deleteInvoice(${
        invoice.id
      })"><i class="bi bi-x-circle text-danger"></i></button>
   <button class="btn" style="background-color: ${
     invoice.paid ? "#a2d8a8" : "#ffdab3"
   }; color: ${invoice.paid ? "#2c6b2f" : "#e36b00"}" onclick="markAsPaid(${
    invoice.id
  })">
  ${invoice.paid ? "Mark as Unpaid" : "Mark as wPaid"}
</button>


    </td>
  `;

  return row;
}

function generateUniqueId() {
  return Date.now();
}

export {
  saveToLocalStorage,
  renderTableRows,
  createClientRow,
  createInvoiceRow,
  generateUniqueId,
};
