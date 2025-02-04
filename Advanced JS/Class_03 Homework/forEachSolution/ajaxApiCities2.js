$(document).ready(function () {
    $('#fetchDataBtn').click(function () {
        $.ajax({
            url: 'https://api.openaq.org/v1/cities',
            mode: "no-cors",
            headers: {
        "Access-Control-Allow-Origin": "*",
      },
            success: function (response) {
                let cities = response.cities.slice(0, 10);
                $('#dataList').empty();
                cities.forEach(function (city) {
                    $('#dataList').append(`<li>${city.city}</li>`);
                });
            },
            error: function () {
                // If there's an error, fallback to the Pokémon API
                $.ajax({
                    // url: 'https://pokeapi.co/api/v2/pokemon?limit=10',
                    url: 'https://pokeapi.co/api/v2/pokemon',
                    success: function (response) {
                        // let pokemons = response.results;
                        let pokemons = response.results.slice(0,10);
                        $('#dataList').empty();
                        pokemons.forEach(function (pokemon) {
                            $('#dataList').append(`<li>${pokemon.name}</li>`);
                        });
                    },
                    error: function (error) {
                        console.log('Error:', error);
                    }
                });
            }
        });
    });
});