// # Homework 1
// Create a Constructor function for product. Each product has property: name, category (string), hasDiscount (bool) and price.
// Create an array of 15 products. 
// Now answer the following requirements:


function Products(name, category, hasDiscount, price){
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}

let products = [
    new Products("Apple", "Food", true, 1.99),
    new Products("Banana", "Food", false, 0.99),
    new Products("Honey", "Food", false, 3.99),
    new Products("Ice Cream", "Food", true, 4.99),
    new Products("Juice", "Food", true, 2.49),
    new Products("TV", "Electronics", true, 19.99),
    new Products("Radio", "Electronics", false, 99.99),
    new Products("Chair", "Home", true, 14.99),
    new Products("Table", "Home", false, 49.99),
    new Products("Hose", "Garden", true, 5.99),
    new Products("Umbrella", "Garden", false, 20.99),
    new Products("Thor", "Toys", true, 12.99),
    new Products("Batman", "Toys", false, 19.99),
    new Products("T-shirt", "Clothing", true, 19.99),
    new Products("Jacket", "Clothing", false, 59.99),
    new Products("Snickers", "Sports", true, 18.99),
    new Products("Eyelash", "Beauty", false, 4.99)
];

// * Find all products with price greater than 20.
let priceGreaterThanTwenty = products.filter(product => product.price > 20);

console.log(priceGreaterThanTwenty);

// * Get the names of all products of Category Food, that are on discount.
let foodProductsOnDiscount = products
    .filter(product => product.category === "Food" && product.hasDiscount)
    .map(product => product.name);

console.log(foodProductsOnDiscount);

// * Get the price of all products that are on discount.
let discountedProductPrices = products
    .filter(product => product.hasDiscount)
    .map(product => product.price);
console.log(discountedProductPrices);


// * Find the name and price of all products with name starting with a vowel, that are not on discount.
let vowels = ['A', 'E', 'I', 'O', 'U'];
let vowelProducts = products
    .filter(product => vowels.includes(product.name[0].toUpperCase()) && !product.hasDiscount)
    .map(product => ({ name: product.name, price: product.price }));
console.log(vowelProducts);