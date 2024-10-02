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

  // Handle click event to switch active class
  $(".site-nav li a").click(function(){
    $(this).addClass("active").parent().siblings().find("a").removeClass("active");
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





// const startBgFrom = $('.comparison-content').position().top;
// const bgHeight = $('.comparison-vs-img').height();
// $('.cover-line').css('height',`${bgHeight}px`);
// // var outHeight = 600;
// // var MeinHeight1 = 2200;
// // $('.cover-line').css('height',outHeight+'px');
// $(window).scroll(function (event) {
//   var scroll = jQuery(window).scrollTop();
//   //MeinHeight = scroll-MeinHeight;
//   const newBgHeight = startBgFrom-scroll+50;
//   console.log(`scroll: ${scroll}`);
//   console.log(`Start From: ${startBgFrom}`);
//   console.log(startBgFrom-scroll);
//   // var mainScroll = scroll-outHeight;
//   // console.log(`mainScroll: ${mainScroll}`);
//   if(newBgHeight>0 && newBgHeight<=bgHeight){
//     jQuery('.cover-line').css('height',`${newBgHeight}px`);
//   }
//   else if ( newBgHeight <= 0 ){
//     jQuery('.cover-line').css('height',`0px`);
//   }
//   else {
//     jQuery('.cover-line').css('height',`${bgHeight}px`);
//   }
//   // jQuery('.cover-line').css('top',mainScroll+'px');
// });


const startBgFrom = $('.comparison-content').position().top;
const bgHeight = $('.comparison-vs-img').height();
const vsHeight = $('.comparison-list').height();
$('.comparison-list').css('height', `${vsHeight}px`);

$('.cover-line').css('height', `${bgHeight}px`);

let currentAnimationIndex = 80; // Track the current visible animation index
const scrollThreshold = 20; // Minimum scroll distance to trigger an animation change
const scrollSensitivity = 1; // Sensitivity factor for scroll height reduction

$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  const newBgHeight = Math.max(0, startBgFrom - (scroll * scrollSensitivity)); // Reduce height by scrollSensitivity pixels

  // console.log(`scroll: ${scroll}`);
  console.log(`newBgHeight: ${newBgHeight}`);
  console.log(`scroll: ${scroll}`);
  // Update cover-line height
  if (newBgHeight <= bgHeight) {
    $('.cover-line').css('height', `${newBgHeight}px`);
  } else {
    $('.cover-line').css('height', `${bgHeight}px`);
  }

  // Manage visibility of vs_animation elements
  let foundCurrent = false; // Track if we found the current animation
  $('.vs_animation').each(function(index) {
    const animationTop = $(this).offset().top; // Get the position of each animation

    // Check if the scroll position is past the animation
    if (scroll + $('.comparison-content').outerHeight() > animationTop - scrollThreshold) {
      // Only show the animation if it's not already visible
      if (currentAnimationIndex !== index) {
        // If it's a new animation, reset the previous one
        if (currentAnimationIndex !== -1) {
          $('.vs_animation').eq(currentAnimationIndex).removeClass('vault').css('opacity', '0'); // Hide previous animation
        }
        $(this).addClass('vault').css('opacity', '1'); // Show current animation
        currentAnimationIndex = index; // Update the current animation index
      }
      foundCurrent = true; // Set foundCurrent to true
    }
  });

  // If no current animation is found, reset
  if (!foundCurrent && currentAnimationIndex !== -1) {
    $('.vs_animation').eq(currentAnimationIndex).removeClass('vault').css('opacity', '0');
    currentAnimationIndex = -1; // Reset the current animation index
  }
 
});



$(document).ready(function() {
  // Ensure that the magic-behind and dynamic line elements exist before proceeding
  if ($('.magic-behind').length && $('.dynamic-line').length) {

    // Get the top position of the magic-behind section
    const magicBehindTop = $('.magic-behind').offset().top;
    const magicBehindHeight = $('.magic-behind').outerHeight(); // Full height of the magic-behind section
    const maxLineHeight = $('.item.timeline-child-center').outerHeight(); // Max height the dynamic line starts with

    // Set the default height of the dynamic line to 100% or maxLineHeight
    $('.dynamic-line').css('height', `${maxLineHeight}px`);

    $(window).on('scroll', function () {
      var scrollPosition = $(window).scrollTop();
      
      // Check if the scroll position is within the magic-behind section
      if (scrollPosition >= magicBehindTop && scrollPosition <= (magicBehindTop + magicBehindHeight)) {
        // Calculate the percentage of scroll within the magic-behind section
        const scrollInMagicBehind = scrollPosition - magicBehindTop;

        // Calculate how much to reduce the height by 100 pixels per scroll event
        const newLineHeight = Math.max(maxLineHeight - Math.floor(scrollInMagicBehind / 100) * 120, 0);

        // Apply the new height to the dynamic line
        $('.dynamic-line').css('height', `${newLineHeight}px`);

      } else if (scrollPosition < magicBehindTop) {
        // Before reaching the magic-behind, set the height to maxLineHeight
        $('.dynamic-line').css('height', `${maxLineHeight}px`);
        
      } else if (scrollPosition > (magicBehindTop + magicBehindHeight)) {
        // After scrolling past the magic-behind, set the height to 0
        $('.dynamic-line').css('height', `0px`);
      }
    });
  }
});
