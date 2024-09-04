$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });
  });

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


const how_card_data = [
  { heading: "Discovery Call",
      para: "We start with a deep dive into your business. This initial call helps us understand what you’re trying to do and how we can best help your marketing efforts. " 
  },
  { heading: "Marketing Plan Creation",
    para: "Using gathered insights, we create specific campaigns for Yelp, Google, Facebook, and X, tailor social media content, and develop a detailed approach to get your business more leads and customers." 
  },
  { heading: "Implementation",
  para: "We set up, optimize, and launch all necessary tools and accounts, ensuring everything is branded under your business name for full transparency. " 
  },
  { heading: "Monitoring and Optimization",
  para: "Our team continuously monitors all campaigns and platforms, using real-time data to optimize strategies. Regular adjustments are made based on performance metrics and your feedback to ensure campaigns always align with your evolving business needs." 
  },
  { heading: "Weekly Call & Reporting",
  para: "We hold weekly strategy meetings to discuss campaign progress, review analytics, and brainstorm improvement opportunities, ensuring you’re always in the loop. You receive detailed reports on campaign performance and budget usage, helping you understand your ROI." 
  },
  { heading: "Scaling",
  para: "We scale successful strategies to maximize reach and add advanced features like CRM automation, ad targeting, and enhanced branding to continue boosting your lead flow." 
  }
];

cultter = ""
var modal = document.querySelector(".modal")
document.querySelectorAll(".how-card").forEach(function(elem){
  elem.addEventListener("click", function(){
    modal.innerHTML = cultter
  });
});
how_card_data.forEach(function(cardData){
  console.log(cardData)
cultter+= ` <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h4>${cardData.heading}</h4>
                    <p>${cardData.para}</p>
                </div>
                <div class="modal-footer">
                
                </div>
            </div>
            </div>
        </div>`
});
const how_card_modal = document.querySelector(".how-card-modal")
console.log(how_card_modal.innerHTML)
how_card_modal.innerHTML = cultter




