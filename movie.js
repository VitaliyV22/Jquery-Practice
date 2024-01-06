const movieValue = $("#Title").val();
const ratingValue = $("#Rating").val();
var button = $("<button>").text("Delete");
var button2 = $("<button>").text("Delete");

$("#form").on("submit", function (event) {
  $("#titleList").append("<li>movieValue</li>",button);
  $("#ratingList").append("<li>ratingValue</li>", button2);
  event.preventDefault();
});

$(button).on( "click", function() {
    mov
  })
