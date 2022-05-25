/* 탭 메뉴 클릭시 배경 색상이 변경되고, 상세 내용이 나타나는 기능을 만들어 보세요.
<a>가 갖고 있는 본래의 기능을 정지시켜 보세요.
<a>의 href 속성값을 기준으로 탭 메뉴 클릭시 색상이 변경되는 코드를 작성해 보세요.
마찬가지로 클릭된 메뉴에 대응되는 상세 내용이 나타나게끔 코드를 작성해 보세요.
*/

$(function() {

    $(".tabs-list li a").click(function(e){ e.preventDefault(); });
       // 실제 버튼 기능 수행되는 구간은 li
       $(".tabs-list li").click(function(){
           // a 태그를 찾고 a 태그가 갖는 href의 속성 값을 tabId에 넣기
           var tabId = $(this).find("a").attr("href");
           // console.log($tabId);
           // 버튼을 클릭하면 들어가 있는 모든 active 제거
           $(".tabs-list li,.tabs div.tab").removeClass("active"); 
           // 클릭된 영역에 대응되는 하단 영역의 active 클래스 다시 추가
           $(".tab").hide();
           $(tabId).show();
           $(this).addClass("active");
       });
   });