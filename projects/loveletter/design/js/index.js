var sections = document.querySelectorAll('.section');

window.addEventListener('scroll', function() {
  scrollHandler();
});
//popup show
scrollHandler = function () {
  var scrollPos = window.pageYOffset;

  for (i = 0; i < sections.length; i++) {
    var element = sections[i];
    var elementScrollOffset = element.offsetTop;

    if (scrollPos >= elementScrollOffset) {
      element.classList.add('active');
      element.classList.remove('hidden');
    } else if (scrollPos < elementScrollOffset) {
      element.classList.remove('active');
      element.classList.add('hidden');
    }
  }
};

scrollHandler();
//hide popup
    $("#close1").click(function(){
        $("#box1").hide();
    });
$("#close2").click(function(){
        $("#box2").hide();
    });
$("#close3").click(function(){
        $("#box3").hide();
    });
$("#close4").click(function(){
        $("#box4").hide();
    });

$(function(){

  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.scdown').fadeOut('200');
    if (scrolled < 200) $('.scdown').fadeIn('200');
  });
  
  //return-to-top
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-top').fadeIn('200');
    if (scrolled < 200) $('.go-top').fadeOut('200');
  });
  
  $('.go-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

});
