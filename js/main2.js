


$(window).scroll(function(){
    $(".content").css("opacity", 1 - $(window).scrollTop() / 350);
  });



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


$(document).ready(function() {


// NAVIGATION





$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    catSmile();
    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});

// THROTTLE FUNCTION

function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

function navScroll() {
    var pos = $(this).scrollTop();

    var homeTop = 0;
    var aboutTop = $('#about').offset().top - 50;
    var workTop = $('#work').offset().top - 100;
    var contactTop = $('#contact').offset().top - 150;

    var legacyTop = $('#work').offset().top - 100;
    var weDeliverTop = $('#wedeliver').offset().top - 100;
    var inscitesTop = $('#inscites').offset().top - 100;
    var kahootsTop = $('#kahoots').offset().top - 100;
    var diamondTop = $('#diamond').offset().top - 100;
    


    };

   }; 
