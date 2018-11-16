$(function() {
  // 自动播放音乐
  setTimeout(function() {
    $("#audio")[0].play();
  }, 50);

  // 点击开始游戏
  $(".start-game").click(function() {
    alert("开始游戏！");
  })
})