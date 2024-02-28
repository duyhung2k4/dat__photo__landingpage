$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('.dat__header__nav').addClass('dat__header__affix');
    console.log("OK");
  } else {
    $('.dat__header__nav').removeClass('dat__header__affix');
  }
});