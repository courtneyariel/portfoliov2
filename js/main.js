


    $(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 585) {
                    $(".top_bar").addClass("black_bkgd");
                } else {
                    $(".top_bar").removeClass("black_bkgd");
                }
            });
        });

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0          // default
   }
)
wow.init();

$(window).scroll(function(){
    $(".content").css("opacity", 1 - $(window).scrollTop() / 350);
  });


$(function() {
  var menuVisible = false;
  $('#menuBtn').click(function() {
    if (menuVisible) {
      $('#myMenu').css({'display':'none'});

      menuVisible = false;
      return;
    }
    $('#myMenu').css({'display':'block'});
    $('#myMenu').addClass('.fade');
   
    menuVisible = true;
  });
  $('#close').click(function() {
    $('#myMenu').css({'display':'none'});
    
    
    menuVisible = false;
  });

      $('#myMenu').click(function() {
    $(this).css({'display':'none'});

     menuVisible = false;
  });
});

$('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


jQuery(function( $ ){
            /**
             * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
             * @see http://demos.flesler.com/jquery/scrollTo/
             * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.localScroll.
             */
            
            // The default axis is 'y', but in this demo, I want to scroll both
            // You can modify any default like this
            $.localScroll.defaults.axis = 'y';
            
            /**
             * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
             * also affect the >> and << links. I want every link in the page to scroll.
             */
            $.localScroll({
                target: 'html', // could be a selector or a jQuery object too.
                queue:true,
                duration:1000,
                hash:true,
                offset: -85,                
                onBefore:function( e, anchor, $target ){
                    // The 'this' is the settings object, can be modified
                },
                onAfter:function( anchor, settings ){
                    // The 'this' contains the scrolled element (#content)
                }
            });
        });


