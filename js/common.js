//search_box
$(document).ready(function(){
    $('.search_box .icon').click(function(){
        $(this).toggleClass('active');
    });
});


//gnb
$(document).ready(function(){
    $('.gnb').hover(function(){
        $('.subnav, .gnbbg').stop().slideDown('fast');
    }, function(){
        $('.subnav, .gnbbg').stop().slideUp('fast');
    })
});


//family site
$(document).ready(function(){
    $('.family_site button').click(function(){
        $(this).toggleClass('active');
    });
});


//scrolltop
$(document).ready(function(){
    var btn = 'aside a';
    var speed = 1200;
    var easing = 'easeOutQuart';

    $(window).scroll(function(){
        var top = $(window).scrollTop();

        if(top > 200){
            $(btn).parent().fadeIn('slow');
        }else{
            $(btn).parent().fadeOut('slow');
        }
    });

    $(btn).click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, speed, easing);
    });
});