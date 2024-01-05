const movieValue = $("#Title").val();
const ratingValue = $("#Rating").val();

$("#form").on("submit", function (event) {
  $("#titleList").append("<li>movieValue</li>");
  $("#ratingList").append("<li>ratingValue</li>");
  event.preventDefault();
});
