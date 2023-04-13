
$('document').ready(function () {
  var switcher = true

  $(".burger_menu").click(function(e) {
    e.preventDefault()
    $(this).toggleClass('open');
    $(".sandwich").toggleClass("active");
  });
  
  $(".burger_menu").click(function () {
    if ($(".sub-menu").is(":visible")) {
        $(".sub-menu").fadeOut(600);
        $("body").removeClass("overflow");
    } else {
        $(".sub-menu").fadeIn(600);
        $("body").addClass("overflow")
    };
  });
})