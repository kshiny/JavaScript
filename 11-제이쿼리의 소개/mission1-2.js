/* 버튼 클릭시 상자의 크기를 600 * 600, 왼쪽을 기준으로 300px 만큼 이동하는 jQuery 코드를 작성해 보세요. */

$(function() { $('button').click(function() {
  
  $('#move').width('600px'); 
  $('#move').height('600px'); 
  $('#move').css('left', '300px'); 
  }); 
});
