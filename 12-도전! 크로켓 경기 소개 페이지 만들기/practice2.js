/* 일정 시간을 기준으로 자동으로 이미지가 교체되는 이미지 슬라이드(1) 기능을 구현해 보세요.
find()로 특정 슬라이드를 찾아보세요.
일정 시간을 기준으로 이미지의 크기 만큼 이미지가 왼쪽으로 이동하는 애니메이션 기능을 구현해 보세요.
*/

$(function() {
  
    var $slider = $("#slider");
    var $slides = $slider.find('.slides');
    var $slide = $slides.find('.slide');
    
    var currentSlide = 1; // 현재 이미지의 좌표
    
    setInterval(function() {
      
      $slides.animate( {'margin-left' : "-=" + 1024}, 1000, function() { // 이미지 왼쪽으로 이동하는 시간 1초
         currentSlide++;
          
          // currentSlide === 6
         if(currentSlide === $slide.length) {
            currentSlide = 1; // 다시 처음 이미지로 변경
            $slides.css("margin-left", 0);
          }
      })
    }, 3000) // 이미지 바뀌는 시간 3초
   
  });