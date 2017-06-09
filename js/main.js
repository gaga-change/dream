var menuDown = false;
$('#menu-link').click(function (e) {
  e.stopPropagation();
  if (!menuDown){
    $('#menu').slideDown(400);
    menuDown = true;
  }
  else {
    $('#menu').slideUp(400);
    menuDown = false;
  }
});
$(document).click(function (e) {
  menuDown = false;
  $('#menu').fadeOut(400);
});
