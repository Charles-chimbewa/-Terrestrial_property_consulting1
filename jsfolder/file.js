var contaniers = [
    {
      Upload: '../build3.jpg',
    },
    {
      Upload: '../build2.jpg',
    },
    {
      Upload: '../build.jpg',
    }
  ];
  
  var change = 0;
  
  var imageE = document.querySelector('img');
  var textE = document.querySelector('.name');
  
  function fun1() {
    var { Upload } = contaniers[change];
    imageE.src = Upload;
    imageE.style.transition ="0.3s ease-in";
    // If you have 'text' in your objects, you can use it like this:
    // var { Upload, text } = contaniers[change];
    // textE.innerText = text;
  
    change++;
  
    if (change === contaniers.length) {
      change = 0;
    }
  
    setTimeout(fun1, 2000);
  }
  
  fun1();

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

window.onload= function () {
  setInterval(function(){ 
     plusSlides(1);
  }, 2000);
 }