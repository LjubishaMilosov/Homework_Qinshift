// BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML


function getRecipeName() {
    let recipeName = prompt("Enter the name of the recipe: ");
    return recipeName;
}

function getNumberOfIngredients(){
    let numberOfIngredients = parseInt(prompt("How many ingredients do we need for the recipe?"), 10);
    return numberOfIngredients;
}

function getIngredientsName(numberOfIngredients) {
    let ingredients = [];
    for(let i = 0; i < numberOfIngredients; i++){
         ingredients.push(prompt("Enter the name of the ingredient:"));
    }
    return ingredients;
}

function renderRecipeName(recipeName, container) {
    let h2 = document.createElement("h2");
    h2.textContent = `Recipe name: ${recipeName}`;
    container.appendChild(h2);
}

function renderNumberOfIngredients(numberOfIngredients, container) {
    let p = document.createElement("p");
    p.textContent = `Number of ingredients required: ${numberOfIngredients}`;
    container.appendChild(p);

}

function renderIngredientsNames(ingredientsNames, container) {
    const ul = document.createElement("ul");
    for(const ingredient of ingredientsNames){
        let li = document.createElement("li");
        li.textContent = ingredient;
        ul.appendChild(li);
    }
    container.appendChild(ul);
}

function createRecipePage() {
    let recipeName = getRecipeName();
    let numberOfIngredients = getNumberOfIngredients();
    let ingredientsNames = getIngredientsName(numberOfIngredients);

    let container = document.getElementById("container");
    renderRecipeName(recipeName, container);
    renderNumberOfIngredients(numberOfIngredients, container);
    renderIngredientsNames(ingredientsNames, container);
}

createRecipePage();