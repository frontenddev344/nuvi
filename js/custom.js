$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });
  });



  
  const CalContainer = document.querySelector('.calender-container');
  document.querySelector('.slider').addEventListener('input', (e) => {
    CalContainer.style.setProperty('--position', `${e.target.value}%`);
  })