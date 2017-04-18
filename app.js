$(document).ready(function() {

  // remove parens in tablet view
  if ($(window).width() >= 768) {
    $('#title p:nth-child(3)').removeClass('parens');
  }

  // remove * in desktop view
  if ($(window).width() >= 992) {
    $('').removeClass('');
  }

}); // document ready block
