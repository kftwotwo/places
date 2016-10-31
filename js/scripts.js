function Vacation (placeName, year, climate, notes) {
  this.placeName = placeName;
  this.year = year;
  this.climate = climate;
  this.notes = notes;
}

$(document).ready(function() {
  $("#myForm").submit(function(event) {
    event.preventDefault();
    var userPlace = $("#userPlace").val()
    var userYear = $("#userYear").val()
    var userClimate = $("#userClimate").val()
    var userNotes = $("#userNotes").val()

    var vacation = new Vacation (userPlace, userYear, userClimate, userNotes);

    $('ul#outputList').append("<li><span class='place'>" + vacation.placeName + "</span></li>");


    $('.place').last().click(function () {
      $("#hidden").show();
      $('#displayPlace').text(vacation.placeName);
      $('#displayYear').text(vacation.year);
      $('#displayClimate').text(vacation.climate);
      $('#displayNotes').text(vacation.notes);
    });

    $("#userPlace").val("");
    $("#userYear").val("");
    $("#userClimate").val("");
    $("#userNotes").val("");
  });
});
