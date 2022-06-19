AOS.init({
  duration: 1000
});

$(".menu-toggle").click(function(){
  $(".sidebar-left").toggleClass('close1');
  $(".main").toggleClass('open1');
  $(".topnav").toggleClass('open1');
});

$(".colse-sidebar").click(function(){
  $(".sidebar-left").toggleClass('close1');
  $(".main").toggleClass('open1');
  $(".topnav").toggleClass('open1');
});