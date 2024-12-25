// Create a dynamic table
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)



let btn = document.getElementById("btn");

function createTable() {
    
    let rows = document.getElementById("rows").value;
    let columns = document.getElementById("columns").value;
    let tableContainer = document.getElementById("tableContainer");
    
    tableContainer.innerHTML = '';

    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(`Row-${i + 1} Column-${j + 1}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    tableContainer.appendChild(table);
    table.setAttribute("border", "2");
    table.setAttribute("cellpadding", "10");
    table.setAttribute("cellspacing", "10");
}

btn.addEventListener("click", createTable);