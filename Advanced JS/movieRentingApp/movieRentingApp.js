// Create a movie renting app
// There should be an array of movie names
// There should be an input and a search button
// When the person enters a name of a movie it should search the array
// If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// The input should not be case sensitive ( it should find the movie regardless of capital or small letters )


let movies = ["Harry Potter", "Lord of the rings", "Iron Man", "Hulk", "Aquaman"]; 

let app = document.getElementById("app");

// Create input element
let searchInput = document.createElement("input");
// searchInput.id = "searchInput";
searchInput.type = "text";
searchInput.placeholder = "Enter movie name";
app.appendChild(searchInput);

// Create button element
let searchBtn = document.createElement("button");
// searchBtn.id = "searchBtn";
searchBtn.innerText = "Search";
app.appendChild(searchBtn);

// Create result element
let result = document.createElement("h1");
// result.id = "result";
app.appendChild(result);

searchBtn.addEventListener("click", function(){
    //validation
    if(!searchInput.value){
        console.log("You must enter a movie to search");
        return;
    }

    let movieFound = searchMovies(searchInput.value);

    if(movieFound){
        result.innerText = "The movie can be rented.";
        result.style.color = "green";
    } else {
        result.innerText = "The movie can not be rented.";
        result.style.color = "red";
    }
});

function searchMovies(searchText){
    for(let movie of movies){
        if(movie.toLowerCase() == searchText.toLowerCase()){
            return true;
        }
    }
    return false;
}