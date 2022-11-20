//popup
$(document).ready(function(){
  function setCookie(name, value, expiredays){
    var todayDate = new Date();

    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';';
  }

  $('html, body').css({'overflow': 'hidden', 'height': '100%'});

  $('.popup .close a').click(function(){
    $('.popup').fadeOut(0);
    $('html, body').css({'overflow': 'auto', 'height': '100%'});
  });

  $('.popup .never a').click(function(){
    $(this).addClass('active');

    if($(this).hasClass('active') == true){
      setCookie('exCookie','done',1);
    }

    $(this).parents('.popup').stop().fadeOut(0);
    $('html, body').css('overflow','visible');
  });

  var cookieData = document.cookie;

  if(cookieData.indexOf('exCookie=done') < 0){
      $('.popup').fadeIn(0);
      $('html, body').css('overflow','hidden');
  }else{
      $('.popup').fadeOut(0);
      $('html, body').css('overflow','visible');
  }
});



//main
$(document).ready(function(){
  var swiper = new Swiper(".main > .swiper-container", {
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      loop: true,
      allowTouchMove: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".main .swiper-pagination",
        clickable: true,
      }
    });
});


//newproduct
$(document).ready(function(){
  var swiper = new Swiper(".newproduct", {
    slidesPerView: 3,
    pagination: {
      el: ".newproduct > .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
  });
});


//recommend
$(document).ready(function(){
  var btn = '.recommend .btn';
  var content = '.recommend .conwrap';

  $(btn).find('li:first a').addClass('active');
  $(content).find('> div:first').fadeIn(0);

  $(btn).find('a').click(function(e){
    e.preventDefault();

    $(btn).find('a').removeClass('active');
    $(this).addClass('active');

    var index = $(this).parent().index();

    $(content).find('> div').stop().fadeOut(0);
    $(content).find('> div').eq(index).stop().fadeIn(0);
  });
});