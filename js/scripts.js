$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userName;
    userName = $("input#name").val();

    $(".personName").text(userName);

    $("#postcard").show();

    event.preventDefault();
  });
});