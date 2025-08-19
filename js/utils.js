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
