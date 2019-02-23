alert('hello');

var slideIndexNum = 0;
showSlides();

function showSlides() {
    var i;
    //var slides = $('.mySlides');
    var slides = document.getElementsByClassName('mySlides');
    
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndexNum++;
    if(slideIndexNum > slide.length) {
        slideIndexNum =1
    }
    
   slides[slideIndexNum-1].style.display = "block";  
   setTimeout(showSlides, 2000); // Change image every 2 seconds
   

   slides.show(); 
 }
