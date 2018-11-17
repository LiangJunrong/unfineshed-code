$(function() {

  /**
   * 开始界面
   */
  // 自动播放音乐
  // setTimeout(function() {
  //   $("#audio")[0].play();
  // }, 50);
  $(".start-game").click(function() {
    $(".game-start").fadeOut("slow", function() {
      $(".prelude").fadeIn("slow");
    });
    
  })


  // ————————————————————————————


  /**
   * 序幕
   */
  $("#prelude-continue").click(function() {
    $(".prelude").fadeOut("slow", function() {
      $(".act-one").fadeIn("slow");
    })
  })


  // ————————————————————————————


  /**
   * 第一章：报名
   */

  // 验证姓名
  $("#user-name").blur(function() {
    var useNamerReg = /^[\u4e00-\u9fa5]{0,}$/;
    var userName = $("#user-name").val();
    if(useNamerReg.test(userName)) {
      $(".user-name").removeClass("is-invalid");
      $(".user-name-valid-feedback").hide();
      $(".user-name-valid-feedback").removeClass("invalid-feedback");
      $(".user-name").addClass("is-valid");
    } else {
      $(".user-name").addClass("is-invalid");
      $(".user-name-valid-feedback").show();
      $(".user-name-valid-feedback").addClass("invalid-feedback");
    }
  })

  // 验证密码
  $("#user-password").blur(function() {
    var userPasswordReg = /^[a-z0-9_-]{6,18}$/;
    var userPassword = $("#user-password").val();
    if(userPasswordReg.test(userPassword)) {
      $(".user-password").removeClass("is-invalid");
      $(".user-password-valid-feedback").hide();
      $(".user-password-valid-feedback").removeClass("invalid-feedback");
      $(".user-password").addClass("is-valid");
    } else {
      $(".user-password").addClass("is-invalid");
      $(".user-password-valid-feedback").show();
      $(".user-password-valid-feedback").addClass("invalid-feedback");
    }
  })

  // 验证个人简介
  $("#user-personal-profile").blur(function() {
    var userPersonalProfileReg = /^[a-z0-9_-]{6,18}$/;
    var userPersonalProfile = $("#user-personal-profile").val();
    if(userPasswordReg.test(userPassword)) {
      $(".user-personal-profile").removeClass("is-invalid");
      $(".user-personal-profile-valid-feedback").hide();
      $(".user-personal-profile-valid-feedback").removeClass("invalid-feedback");
      $(".user-password").addClass("is-valid");
    } else {
      $(".user-personal-profile").addClass("is-invalid");
      $(".user-personal-profile-valid-feedback").show();
      $(".user-personal-profile-valid-feedback").addClass("invalid-feedback");
    }
  })

})