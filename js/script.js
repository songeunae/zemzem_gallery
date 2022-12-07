$(function () {
  $('#datepicker1').datepicker({
    onSelect: function (dateText) {
      $('#datepicker2').datepicker("setDate", $(this).datepicker("getDate"));
    }
  });
});

$(function () {
  $("#datepicker2").datepicker();
});
$.datepicker.setDefaults({
  dateFormat: 'yy-mm-dd' //Input Display Format 변경
});
$.datepicker.setDefaults({
  monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] //달력의 월 부분 텍스트
  , monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip 텍스트
  , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 부분 텍스트
  , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 부분 Tooltip 텍스트
});