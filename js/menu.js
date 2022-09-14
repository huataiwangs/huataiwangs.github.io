$(function(){
  var menuwidth  = 240; // 边栏宽度
  var menuspeed  = 400; // 边栏滑出耗费时间
  
  var $bdy       = $('body');
  var $container = $('#pgcontainer');
  var $burger    = $('#hamburgermenu');
  var negwidth   = "-"+menuwidth+"px";
  var poswidth   = menuwidth+"px";

  /* 额外增加的按钮仅供参考 */
  $('.btn').on('click',function(e){
    if($bdy.hasClass('openmenu')) {
      jsAnimateMenu('close');
    } else {
      jsAnimateMenu('open');
    }
  });

  /* 当按下菜单按钮时 关闭navbar */
  /* 这样可以实现页内跳转 */ 
  window.onload = function(){
    var menu_item = document.getElementById("navul").getElementsByTagName("li");
    for(i in menu_item){
      menu_item[i].onclick = function(){
        if($bdy.hasClass('openmenu')) {
          jsAnimateMenu('close');
        } else {
          jsAnimateMenu('open');
        }
      }
    }
  }

  $('.menubtn').on('click',function(e){
    if($bdy.hasClass('openmenu')) {
      jsAnimateMenu('close');
    } else {
      jsAnimateMenu('open');
    }
  });
  
  $('.overlay').on('click', function(e){
    if($bdy.hasClass('openmenu')) {
      jsAnimateMenu('close');
    }
  });
  
  function jsAnimateMenu(tog) {
    if(tog == 'open') {
      $bdy.addClass('openmenu');
      
      $container.animate({marginRight: negwidth, marginLeft: poswidth}, menuspeed);
      $burger.animate({width: poswidth}, menuspeed);
      $('.overlay').animate({left: poswidth}, menuspeed);
    }
    
    if(tog == 'close') {
      $bdy.removeClass('openmenu');
      
      $container.animate({marginRight: "0", marginLeft: "0"}, menuspeed);
      $burger.animate({width: "0"}, menuspeed);
      $('.overlay').animate({left: "0"}, menuspeed);
    }
  }
});