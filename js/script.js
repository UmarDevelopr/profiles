

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



/*----- First Page Animation -----*/
$(".line").hover(function(){
  $(this).addClass('hovereffects');
},function(){
  $(this).removeClass('hovereffects');
})

/*-----Typed Javscript ------*/
$("#example").typer({
  strings: [
  "Future Optimization Services",

  
  ],
  typeSpeed: 200,
  backspaceSpeed: 20,
  backspaceDelay: 800,
  repeatDelay: 1000,
  repeat: true,
  autoStart: true,
  startDelay: 100,
  });

  /*----Header Scrooll --*/
  
// $(document).ready(function(){
//   $(window).scroll(function(){
//   	var scroll = $(window).scrollTop();
// 	  if (scroll > 300) {
// 	    $(".fnav").css("background" , "#fff");
// 	    $(".nav-link").css("color" , "#020d1c").css("fontWeight", "500");
// 	    $(".dropdown-toggle").css("color" , "#020d1c");
// 	    $(".line").css("background" , "#020d1c");
// 	    $(".navbar-brand").css("color" , "black");
// 	    $(".header-btn").css("color" , "#020d1c").css("fontWeight" , "800");
// 	    $(".main-logo").css("color" , "#020d1c").css("fontWeight" , "800");

      
// 	  }
    
// 	  else{
//       $(".fnav").css("background" , "rgba(2,3,3,.15)");  	
//       $(".nav-link").css("color" , "#fff");
//       $(".navbar-brand").css("color" , "#fff");
//       $(".header-btn").css("color" , "#fff");
// 	    $(".main-logo").css("color" , "#fff").css("fontWeight" , "800");

// 	  }
//   })
// })


/*----Technologies Section ------*/

$(document).ready(function(){

  $("#tbtn2").click(function(){
   $("#trow2").show();
    $("#trow1").hide();
    $("#trow3").hide();
    $("#trow4").hide();
    $("#tbtn2").css("backgroundColor" , "var(--bg-color)");
    $("#tbtn1").css("backgroundColor" , "var(--light-color)");
    $("#tbtn4").css("backgroundColor" , "var(--light-color)");
    $("#tbtn3").css("backgroundColor" , "var(--light-color)");

  });
  $("#tbtn1").click(function(){
   $("#trow1").show();
    $("#trow2").hide();
    $("#trow3").hide();
    $("#trow4").hide();
    $("#tbtn3").css("backgroundColor" , "var(--light-color)");
    $("#tbtn2").css("backgroundColor" , "var(--light-color)");
    $("#tbtn4").css("backgroundColor" , "var(--light-color)");
    $("#tbtn1").css("backgroundColor" , "var(--bg-color)");
  });

  $("#tbtn3").click(function(){
    $("#trow3").show();
     $("#trow2").hide();
     $("#trow1").hide();
     $("#trow4").hide();
     $("#tbtn1").css("backgroundColor" , "var(--light-color)");
     $("#tbtn4").css("backgroundColor" , "var(--light-color)");
     $("#tbtn2").css("backgroundColor" , "var(--light-color)");
     $("#tbtn3").css("backgroundColor" , "var(--bg-color)");
   });
  $("#tbtn4").click(function(){
    $("#trow4").show();
     $("#trow1").hide();
     $("#trow2").hide();
     $("#trow3").hide();
     $("#tbtn1").css("backgroundColor" , "var(--light-color)");
     $("#tbtn2").css("backgroundColor" , "var(--light-color)");
     $("#tbtn3").css("backgroundColor" , "var(--light-color)");
     $("#tbtn4").css("backgroundColor" , "var(--bg-color)");
   });

})


/*----Team Expert SEction ----*/

$(document).ready(function(){

  $("#teambtn2").click(function(){
    $(".teamrow2").css("display" , "block");
    $(".teamrow1").css("display", "none");
    $(".teamrow3").css("display", "none");
    $(".teamrow4").css("display", "none");
    $("#teambtn1").css("backgroundColor" , "var(--light-color)");
    $("#teambtn3").css("backgroundColor" , "var(--light-color)");
    $("#teambtn4").css("backgroundColor" , "var(--light-color)");
    $("#teambtn2").css("backgroundColor" , "var(--bg-color)")
  });

  $("#teambtn1").click(function(){
    $(".teamrow2").css("display", "none");
    $(".teamrow1").css("display" , "block");
    $(".teamrow3").css("display" , "none");
    $(".teamrow4").css("display" , "none");
    $("#teambtn2").css("backgroundColor" , "var(--light-color)");
    $("#teambtn3").css("backgroundColor" , "var(--light-color)");
    $("#teambtn4").css("backgroundColor" , "var(--light-color)");
    $("#teambtn1").css("backgroundColor" , "var(--bg-color)")
  });

  $("#teambtn3").click(function(){
    $(".teamrow2").css("display", "none");
    $(".teamrow1").css("display" , "none");
    $(".teamrow4").css("display" , "none");
    $(".teamrow3").css("display" , "block");
    $("#teambtn1").css("backgroundColor" , "var(--light-color)");
    $("#teambtn2").css("backgroundColor" , "var(--light-color)");
    $("#teambtn4").css("backgroundColor" , "var(--light-color)");
    $("#teambtn3").css("backgroundColor" , "var(--bg-color)")
  });
  $("#teambtn4").click(function(){
    $(".teamrow3").css("display", "none");
    $(".teamrow2").css("display", "none");
    $(".teamrow1").css("display" , "none");
    $(".teamrow4").css("display" , "block");
    $("#teambtn1").css("backgroundColor" , "var(--light-color)");
    $("#teambtn2").css("backgroundColor" , "var(--light-color)");
    $("#teambtn3").css("backgroundColor" , "var(--light-color)");
    $("#teambtn4").css("backgroundColor" , "var(--bg-color)")
  });



})





/*---Page Reloader----*/
$(document).ready(preloderFunction());
    
    
    
function preloderFunction() {
  
  setTimeout(function() {
    
    // Force Main page to show from the Start(Top) even if user scroll down on preloader - Primary (Before showing content)
     
    // Model 1 - Fast            
    document.getElementById("page-top").scrollIntoView();
    
    // Model 2 - Smooth             
    // document.getElementById("page-top").scrollIntoView({behavior: 'smooth'});
        
    
  
    
    // Removing Preloader:
    
    $('#ctn-preloader').addClass('loaded');  
    // Once the preloader has finished, the scroll appears 
    $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {
      // It is so that once the preloader is gone, the entire preloader section will removed
      $('#preloader').delay(1000).queue(function() {
        $(this).remove();
        
        // If you want to do something after removing preloader:
        afterLoad();
        
      });
    }
  }, 3000);
}



function afterLoad() {
  // After Load function body!
}


/*----------Page Scroll Section --------*/
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
          }
    }
    
    lastScrollTop = st;
}

/*-----Scroll Down New Line --------*/
const scrollProgressElement = document.querySelector("#scroll-progress");
function scrollProgress(){

    const totalheightOfWebPage = document.body.scrollHeight;
    const currentDistanceFromTop = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.clientHeight;
    const scrolledPercentage = (currentDistanceFromTop / (totalheightOfWebPage - windowHeight)) * 100;
    //console.log(scrolledPercentage);
    // scrollProgressElement.style.width=Math.round(scrolledPercentage) + '%';
}
document.addEventListener("scroll",scrollProgress);




