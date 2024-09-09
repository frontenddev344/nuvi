$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });

    // $(".site-nav li a").click(function(){
    //   $(this).addClass("active").parent().siblings().find("a").removeClass("active")
    // });
  });


$(document).ready(function() {
  // Get the current page URL
  var currentUrl = window.location.href;

  // Loop through each navigation link
  $('.site-nav li a').each(function() {
    // Check if the href of the link matches part of the current URL
    if (currentUrl.indexOf($(this).attr('href')) !== -1) {
      // Add active class to the matching link
      $(this).addClass('active');
    } else {
      // Remove active class from non-matching links
      $(this).removeClass('active');
    }
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
  imageBefore.style.opacity = opacityValue - 0.1;

  // Rotate the slider handle based on the slider value
  const rotationValue = (value / 100) * 360; // Rotate from 0 to 360 degrees
  slider.style.setProperty('--rotate', `${rotationValue}deg`);

  $('.slider-button').css('rotate',`${value/3}deg`);
});


// scroll to top 

// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});

