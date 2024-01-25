$(document).ready(function () {
  
  // header 햄버거 버튼 클릭시
  var burger = $('.menu-trigger');
  var sideDim = $('#sideDim');
  var h = 0;

  burger.each(function(index){
    var hMenu = $(this);
    
    hMenu.on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active-' + (index+1));
      $(sideDim).addClass('active');
    })
  });

  $(burger).on("click", function () {
    if (h == 0) {
      $('.side-con').addClass('active');
      $(this).addClass('active-1');
      $(sideDim).addClass('active');
      h++;
    } else if (h == 1) {
      $('.side-con').removeClass('active');
      $(this).removeClass('active-1');
      $(sideDim).removeClass('active');
      h--;
    }
    $(window).scroll(function() {
      sct = $(window).scrollTop();
      if(sct > 30){
        $('.side-con').removeClass('active');
        $(burger).removeClass('active-1');
        $(sideDim).removeClass('active');
        h=0;
      }
    });
  })

  // footer 에듀베이션 버튼 누르면
  $(document).ready( function() {
    $('.btn-tgl-footer').click( function() {
      $(this).toggleClass("on");
      $('.address-info').toggleClass("on");
    });
  });

  
});

// 요금정책 버튼 눌렀을때
function openPopup() {
  $('.layer-popup').fadeIn(200);
  $('.lottie-bg').fadeIn(200);
};

// layer popup 닫기버튼
function popupClose() {
  $('.layer-popup').fadeOut(200);
  $('.lottie-bg').fadeOut(200);
};