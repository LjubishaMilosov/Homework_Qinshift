// # Homework 3
// * Use the Dog API https://dog.ceo/dog-api/documentation/breed
// * Call the following url: https://dog.ceo/api/breed/hound/images
// * Display (show on UI) each image returned in the response.
// * Use Fetch or JQuery AJAX by your choice


$(document).ready(function () {
    $("#fetchDogImagesBtn").click(function () {
      $.ajax({
        url: "https://dog.ceo/api/breed/hound/images",
        success: function (data) {
          let images = data.message;
          let imageContainer = $("#imageContainer");
          imageContainer.empty();
          for (let image of images) {
            let img = $("<img>").attr("src", image);
            imageContainer.append(img);
          }
        },
        error: function (error) {
          console.log("An error occurred:", error);
        }
      });
    });
  });