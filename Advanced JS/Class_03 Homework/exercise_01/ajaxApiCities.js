// # Homework 1
// Create a button
// When the button is clicked, get the data from the  api with an AJAX call.
// Print the details for the first 10 cities in an **unordered list**. If you are experiencing CORS problem, try using
// ```javascript
// mode: "no-cors",
// headers: {
//         "Access-Control-Allow-Origin": "*",
//       }
// ```
// in the ajax call.
// If you are still having problem, use https://pokeapi.co/api/v2/pokemon and print details for the first ten pokemons
// of the result.
// * Use JQuery AJAX call

$(document).ready(function () {
  $("#fetchDataBtn").click(function () {
    $.ajax({
      url: "https://api.openaq.org/v1/cities",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      success: function (response) {
        console.log("OpenAQ API response:", response);
        let cities = response.cities.slice(0, 10);
        for (let city of cities) {
          $("#dataList").append(`<li>${city}</li>`);
        }
      },
      error: function () {
        console.log("OpenAQ API call failed, fetching Pokémon data");
        $.ajax({
          url: "https://pokeapi.co/api/v2/pokemon",
          // url: 'https://pokeapi.co/api/v2/pokemon?limit=10',
          // limit=10 -> query parameter
          success: function (response) {
            let pokemons = response.results.slice(0, 10);
            // let pokemons = response.results;
            console.log("Pokémon API response:", pokemons);
            for (let pokemon of pokemons) {
              $("#dataList").append(`<li>${pokemon.name}</li>`);
            }
          },
          error: function (error) {
            console.log("An error occurred fetching Pokémon data");
            console.log(error);
          },
        });
      },
    });
  });
});
