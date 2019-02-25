$(document).ready(function(){ 
var slideIndexNum = 0;
showSlides();

function showSlides() {
    var i;
    var slides = $('.mySlides');
    
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndexNum++;
    if(slideIndexNum > slides.length) {
        slideIndexNum =1;
    }
    
   slides[slideIndexNum-1].style.display = "block";  
   // Change image every 3 seconds 
   setTimeout(showSlides, 3000);  
}


$('#preventDefault').click(function(e) {
    //prevent default behaviour: going to link right away
    e.preventDefault();
    var position = $('#preventDefault').offset().top;
    $('html').animate({scrollTop: position +50}, 'slow');
});

});
