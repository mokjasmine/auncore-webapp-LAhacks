$(document).ready(function() {
  $("#login").click(function() {
    $('html, body').animate({
        scrollTop: $("#signup").offset().top
    }, 500);
  });
  $("#description").click(function() {
    $('html, body').animate({
        scrollTop: $(".descript").offset().top
    }, 500);
  });
});



