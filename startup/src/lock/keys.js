"use strict";

const Keys = [
  { Service: "Copy", Type: "House Key", Price: "$2" },
  { Service: "Copy", Type: "Specialty Key", Price: "$10" },
  { Service: "Create", Type: "House Key", Price: "$20" },
  { Service: "Create", Type: "Specialty Key", Price: "$40" },
  { Service: "Lockout", Type: "Car", Price: "Situaltional" },
  { Service: "Lockout", Type: "House", Price: "Situaltional" },
];

let currentData = Keys;
let sortDirection = 1;

function table(data = Keys) {
  if (!!data && data.length > 1) {
    currentData = data;
    const headers = parseHeader(data);
    const tableElement = generateTable(headers, data);

    const output = document.getElementById("output");

    removeAllChildNodes(output);
    output.appendChild(tableElement);
  } else {
    outputData("invalid input", data);
  }
}

function parseHeader(data) {
  let headers = [];
  for (const [key, value] of Object.entries(data[0])) {
    headers.push({ name: key, type: typeof value });
  }
  return headers;
}

function generateTable(headers, data) {
  const tableElement = document.createElement("table");
  tableElement.classList.add("a");

  addTableStyles(headers);

  generateHeader(headers, tableElement);
  generateRows(data, tableElement);

  return tableElement;
}

function generateHeader(headers, tableElement) {
  const rowElement = document.createElement("tr");
  tableElement.appendChild(rowElement);

  headers.forEach((header) => {
    const cellElement = document.createElement("th");
    rowElement.appendChild(cellElement);
    cellElement.setAttribute("onclick", `sortColumn(this)`);
    const textNode = document.createTextNode(header.name);
    cellElement.appendChild(textNode);
  });
}

function generateRows(data, tableElement) {
  data.forEach((dataRow) => {
    const rowElement = document.createElement("tr");
    tableElement.appendChild(rowElement);
    for (const [, value] of Object.entries(dataRow)) {
      const cellElement = document.createElement("td");
      rowElement.appendChild(cellElement);
      const textNode = document.createTextNode(value);
      cellElement.appendChild(textNode);
    }
  });
}

function addTableStyles(headers) {
  insertRule("#output table {border-collapse: collapse;}");
  insertRule("#output th,td {border: solid white thin;padding:.25em;}");
  insertRule(".selected {background: white; color:black;}");
  headers.forEach((header, index) => {
    if (header.type === "number") {
      insertRule(`#output tr td:nth-child(${index + 1}) {text-align:right;}`);
    }
  });
}

function insertRule(rule) {
  var sheet = window.document.styleSheets[0];
  sheet.insertRule(rule, sheet.cssRules.length);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function sortColumn(column) {
  sortDirection *= -1;
  const sortBy = column.innerText;
  const sortedData = currentData.sort(
    (a, b) => sortDirection * (a[sortBy] > b[sortBy] ? 1 : -1)
  );
  table(sortedData);
}

function outputData(title, data) {
  const output = document.getElementById("output");
  output.innerHTML = `<h3>${title}</h3><pre>${JSON.stringify(
    data,
    null,
    2
  )}</pre>`;
}
