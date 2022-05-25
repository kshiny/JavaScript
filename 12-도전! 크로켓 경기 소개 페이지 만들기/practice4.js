/* 화살표 버튼 클릭시 Fade 효과가 적용된 이미지 슬라이드(2) 기능을 구현해 보세요.*/

$(function() {
  
    $(".right-arrow").click(function() {
        // 현재 슬라이드에서 다음 슬라이드가 출력
        var $curSlide = $("#photo .slide.active");
        var $nextSlide = $curSlide.next();

        $curSlide.fadeOut().removeClass("active");
        $nextSlide.fadeIn().addClass("active");
        
        // 다음으로 넘어갈 슬라이드가 없다면 처음 슬라이드로 돌아가게 함
        if( $nextSlide.length === 0 ) {
            $("#photo .slide").first().fadeIn().addClass("active");
        }
    });


    $(".left-arrow").click(function() {
        // 현재 슬라이드에서 이전 슬라이드가 출력
        var $curSlide = $("#photo .slide.active");
        var $prevSlide = $curSlide.prev();

        $curSlide.fadeOut().removeClass("active");
        $prevSlide.fadeIn().addClass("active");
        
        // 이전으로 넘어갈 슬라이드가 없다면 마지막 슬라이드로 돌아가게 함
        if( $prevSlide.length === 0 ) {
            $("#photo .slide").last().fadeIn().addClass("active");
        }
    });
});  
  
