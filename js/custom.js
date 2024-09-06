$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });
  });


const CalContainer = document.querySelector('.calender-container');
const imageBefore = document.querySelector('.image-before');
const slider = document.querySelector('.slider');

slider.addEventListener('input', (e) => {
  const value = e.target.value < 10 ? 10 : e.target.value > 74 ? 74 : e.target.value;
  
  // Set the custom property for positioning
  CalContainer.style.setProperty('--position', `${value}%`);

  // Map the slider value to opacity (0 to 1)
  const opacityValue = value / 100;
  imageBefore.style.opacity = opacityValue;

  // Rotate the slider handle based on the slider value
  const rotationValue = (value / 100) * 360; // Rotate from 0 to 360 degrees
  slider.style.setProperty('--rotate', `${rotationValue}deg`);

  $('.slider-button').css('rotate',`${value/3}deg`);
});
