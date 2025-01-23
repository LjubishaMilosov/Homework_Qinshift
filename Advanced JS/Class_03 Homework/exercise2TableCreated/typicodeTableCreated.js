let button = document.getElementById("fetchUserDetailsBtn");

button.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      response.json()
        .then(function (data) {
          let user = data;
          let tableBody = document.querySelector("#userDetailsTable tbody");

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