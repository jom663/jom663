//$(document).ready(function(){
//    $(".box").click(function(){
//      var items = $(".boxes");
//      var item = Math.floor(Math.random() * items.length);
//      
//      if($(items[item]).css('background-color') == "rgb(255, 255, 255)") {
//        $(this).css({backgroundColor:"#6A37B7", color:"rgb(255, 255, 255)"});
//    }
//     else {
//        $(this).css({backgroundColor:"#rgb(255, 255, 255)", color:"#6A37B7"});
//     }
//    });
//});

$(document).ready(function(){
    $(".box").click(function(){
       var items = $(".boxes");
var item = Math.floor(Math.random() * items.length);
      $(items[item]).css({backgroundColor:"#6A37B7", color:"white"});
    });
});

//$(document).ready(function(){
//    $(".box").click(function(){
//       var items = $(".boxes");
//var item = Math.floor(Math.random() * items.length);
//      if($(".boxes").hasClass('active')) {
//      element.removeClass.('active');}
//      else
//      {$(items[item]).addClass("active");}
//      
//    });
//});