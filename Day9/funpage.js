$(document).mousemove(function(e){
    $("#box").css({left:e.pageX, top:e.pageY});
});
var clickCount = 0;
$(document).click(function(e) {
    clickCount++;
    $("#clicked").html(clickCount)
    });
$(document).keypress(function(e){
  if (e.keyCode === 103) {
    $(".text").css("color", "green");
  }
  else if (e.keyCode === 98) {
    $(".text").css("color","blue");
  };
});