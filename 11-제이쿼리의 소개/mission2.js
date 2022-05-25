/* 현재 노란색 체크 박스가 각 박스 안에 들어가 있는 상태입니다.
index.css 안에 있는 .check_icon 안에 있는 display의 속성값으로 none을 적용합니다.
박스 클릭시 addClass()로 .select 안에 .on 클래스를 추가하여 클릭된 영역의 노란색 체크 박스가 나오는 기능을 만듭니다.
단, 다른 박스를 클릭했을 경우 이전에 생성된 노란색 체크 박스는 사라지고, 클릭된 영역 안에 노란색 체크 박스가 나타나게끔 기능을 만듭니다.
*/

$(function() { 

    $(".select").click(function() { 
        $(".select").removeClass('on');
        $(this).addClass('on'); 
        
    }); 
});
