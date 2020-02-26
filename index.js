function fetchAndRender(url, {render, transform}) {
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    jsonData = (transform && transform(jsonData)) || jsonData
    render(jsonData);
  });
}

function generateTableHead(table, data, opts = {}) {
  const { decorateHeadCell } = opts
  let thead = table.createTHead();
  let row = thead.insertRow();
  data.map((key, index) => {
    let th = document.createElement("th");
    decorateHeadCell && decorateHeadCell(th, { index })
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  })
}

function generateTable(table, data, opts = {}) {
  const { decorateRow, decorateCell } = opts
  let body = table.createTBody();
  data.map((element, index) => {    
    let row = body.insertRow();
    decorateRow && decorateRow(row, {index})
    Object.keys(element).map((key, index) => {
      let cell = row.insertCell();
      decorateCell && decorateCell(cell, {index, key})
      let cellData = element[key]
      let text = document.createTextNode(cellData);
      cell.appendChild(text);
    })
  })
}

function tableFor(selector, data, opts = {}) {
  const { decorateTable } = opts
  let table = document.querySelector(selector);
  decorateTable && decorateTable(table)
  let headerData = data[0]
  let headers = Object.keys(headerData);
  generateTableHead(table, headers, opts);
  generateTable(table, data, opts);
}
