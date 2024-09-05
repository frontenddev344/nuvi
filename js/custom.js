$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });
  });


  let calVar = document.querySelector(".Calendar-Variant");
  let calContent = document.querySelector(".calendar-sec-content");
  let stick = document.querySelector(".stick");
  
  calContent.addEventListener("mousemove", function(event) {
    // Get mouse X position relative to the calendar content
    let mouseX = event.clientX - calContent.getBoundingClientRect().left;
  
    // Move the stick to follow the mouse
    stick.style.left = mouseX + "px";
    // stick.style.style.transform =  mouseX + "px" / 10 + "px";
    // Calculate opacity based on stick position
    let calWidth = calContent.offsetWidth;
    let opacity = mouseX / calWidth;
  
    // Set the opacity for the Calendar-Variant element
    calVar.style.opacity = opacity;
  });
  