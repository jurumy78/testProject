$(document).ready(function () {
  $(".show-btn").click(function () {
    $(".modal").fadeIn("active");
  });

  $(".modal-close").click(function () {
    $(".modal").fadeOut("active");
  });

  $(".quick > a[href^='#']").click(function (e) {
    e.preventDefalut(); //a태그의 기능 막기
    var targetPos = $($(this).attr("href")).offset().top;
    $("body html").animate({ scrollTop: targetPos }, 700); //요소의 위치로 스크롤이동
  });
});
