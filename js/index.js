$(".burger_menu").click(function(e) {
  e.preventDefault()
  $(this).toggleClass('open');
  $(".sandwich").toggleClass("active");
});

$(".burger_menu").click(function () {
  if ($(".sub-menu").is(":visible")) {
      $(".sub-menu").fadeOut(600);
      $(".top_mnu li a").removeClass("fadeInUp animated");
  } else {
      $(".sub-menu").fadeIn(600);
  };
});