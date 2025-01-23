// # Homework 3
// * Use the Dog API https://dog.ceo/dog-api/documentation/breed
// * Call the following url: https://dog.ceo/api/breed/hound/images
// * Display (show on UI) each image returned in the response.
// * Use Fetch or JQuery AJAX by your choice

let button = document.getElementById("fetchDogImagesBtn");

button.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breed/hound/images")
    .then(function (response) {
      response.json()
        .then(function (data) {
          let images = data.message;
          let imageContainer = document.getElementById("imageContainer");
          imageContainer.innerHTML = "";
          for (let image of images) {
            let img = document.createElement("img");
            img.src = image;
            imageContainer.appendChild(img);
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
