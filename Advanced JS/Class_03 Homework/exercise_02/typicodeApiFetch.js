// # Homework 2
// * Create a button
// * When the button is clicked, call the https://jsonplaceholder.typicode.com/users/1
// * Get the details for the first user using **FETCH API**.
// * Print the person stats in a **table**.

let button = document.getElementById("fetchUserDetailsBtn");

button.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      response.json()
        .then(function (data) {
          let user = data;
          let table = document.createElement("table");
          let tableHead = document.createElement("thead");
          let tableBody = document.createElement("tbody");
          let tableRow = document.createElement("tr");
          let headerCell1 = document.createElement("th");
          let headerCell2 = document.createElement("th");
          headerCell1.textContent = "Key";
          headerCell2.textContent = "Value";
          tableRow.appendChild(headerCell1);
          tableRow.appendChild(headerCell2);
          tableHead.appendChild(tableRow);
          table.appendChild(tableHead);
          table.appendChild(tableBody);
          document.body.appendChild(table);

          function appendRow(key, value) {
            let row = document.createElement("tr");
            let cell1 = document.createElement("td");
            let cell2 = document.createElement("td");
            cell1.textContent = key;
            cell2.textContent = value;
            row.appendChild(cell1);
            row.appendChild(cell2);
            tableBody.appendChild(row);
          }

          let keys = Object.keys(user);
          for (let key of keys) {
            if (typeof user[key] === 'object' && user[key] !== null) {
              let nestedKeys = Object.keys(user[key]);
              for (let nestedKey of nestedKeys) {
                appendRow(`${key}.${nestedKey}`, JSON.stringify(user[key][nestedKey]));
              }
            } else {
              appendRow(key, user[key]);
            }
          }
        })
        .catch(function (errorParse) {
          console.log(errorParse);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
});