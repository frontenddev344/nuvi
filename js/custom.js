$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });
  });



  
  // const CalContainer = document.querySelector('.calender-container');
  // document.querySelector('.slider').addEventListener('input', (e) => {
  //   CalContainer.style.setProperty('--position', `${e.target.value}%`);
  // })

  const CalContainer = document.querySelector('.calender-container');
  const imageBefore = document.querySelector('.image-before');
  const slider = document.querySelector('.slider');
  
  slider.addEventListener('input', (e) => {
    const value = e.target.value;
  
    // Set the custom property for positioning
    CalContainer.style.setProperty('--position', `${value}%`);
  
    // Map the slider value to opacity (0 to 1)
    const opacityValue = value / 100;
    imageBefore.style.opacity = opacityValue;
  });
  
  
