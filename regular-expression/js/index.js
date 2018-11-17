$(function() {
  /**
   * 序幕
   */
  // 自动播放音乐
  // setTimeout(function() {
  //   $("#audio")[0].play();
  // }, 50);

  // 点击开始游戏
  $(".start-game").click(function() {
    $(".game-start").fadeOut("slow", function() {
      $(".prelude").fadeIn("slow");
    });
    
  })

  /**
   * 第一幕
   */
  $("#prelude-continue").click(function() {
    $(".prelude").fadeOut("slow", function() {
      $(".act-one").fadeIn("slow");
    })
  })
})