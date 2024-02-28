$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('.dat__header__nav').addClass('dat__header__affix');;
  } else {
    $('.dat__header__nav').removeClass('dat__header__affix');
  }
});

$('.dat__header__navTrigger').click(function () {
  $(this).toggleClass('dat__header__active');
  $("#dat__header__mainListDiv").toggleClass("dat__header__show_list");
  $("#dat__header__mainListDiv").fadeIn();
});