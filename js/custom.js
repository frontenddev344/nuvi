$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
    });
  });

  $(document).ready(function(){
    $(".closed-menu").click(function(){
      $("body").removeClass("toggle");
    });
  });