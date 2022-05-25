/* 메뉴 버튼 클릭시 선택된 영역으로 스크롤되면서 이동되는 내비게이션 기능을 만들어 보세요.

1. **`<a>`**가 갖고 있는 본래의 기능을 정지시켜 보세요.
2. 메뉴 버튼 클릭시 이동할 각 섹션의 절대좌표를 가져오세요.
3. 애니메이션 이벤트를 사용하여 부드럽게 이동하는 효과를 구현해 보세요.
*/

$(function() {
  
    $("header a").click(function(e) {
      e.preventDefault();
      
      var $target = $(this.hash);
      //console.log($target);
    
    $("html, body").animate({ scrollTop: $target.offset().top }, "slow");
  
    });
    
  });