
$('document').ready(function () {
  var switcher = true

  $(".burger_menu").click(function(e) {
    e.preventDefault()
    
    if(switcher) {
      $('body').css('overflow', 'hidden');
      switcher = !switcher
    } else {
      $('body').css('overflow', 'initial');
      switcher = true
    }
    $(this).toggleClass('open');
    $(".sandwich").toggleClass("active");
  });
  
  $(".burger_menu").click(function () {
    if ($(".sub-menu").is(":visible")) {
        $(".sub-menu").fadeOut(600);
        $(".sub-menu li a").removeClass("animated");
    } else {
        $(".sub-menu").fadeIn(600);
        $(".sub-menu li a").addClass("animated")
    };
  });
  
  console.log($('p.text.second'))

})


var user = {
  name: 'vasil',
  age: 20,
  status: 'ukr',
  getName: function() {
    return this.name
  },
  setName: function(value) {
    this.name = value
  }
};

console.log(user.setName('Bogdan'))

console.log(user.getName())

