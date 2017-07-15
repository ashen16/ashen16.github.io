// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $(".navbar-collapse").collapse('hide');});

causeRepaintsOn = $("p");

$(window).resize(function() {
  causeRepaintsOn.css("z-index", 1);
});

function main() {
  $('.projects').hide(); 
    
  $('.projects-button').hover(function(){
      $(this).css("background-color", "lightgray");
  },
    function(){
      $(this).css("background-color", "whitesmoke");
  });
    
  $('.projects-button').on("click", function(){
    /*$(this).next().toggle();*/
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
      
   
  });
    
  $('.projects li').click(function(){
        $(this).toggleClass('project');/*css('color', 'purple').animate({
            opacity:'0.5',
            fontSize: '6vw'
        });*/
    });
  
}

$(document).ready(main);