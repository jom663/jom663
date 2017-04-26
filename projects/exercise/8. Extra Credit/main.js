
   $(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 100) {
                    $("body").css('background-color', '#99ddff');
                } else if(scroll_pos > 200 && 100 < scroll_pos)  {console.log ("im a");
                    $("body").css('background-color', '#33bbff');
                }
              else if(scroll_pos > 300 && 200 < scroll_pos)  {console.log ("im b");
                    $("body").css('background-color', '#0088cc');
                }
              else if(scroll_pos > 400 && 300 < scroll_pos)  {
                    $("body").css('background-color', '#004466');
                }
              else if(scroll_pos > 500 && 400 < scroll_pos)  {
                    $("body").css('background-color', '#000000');
                }
              else {$("body").css('background-color', 'white');
                
              }
            });
        });