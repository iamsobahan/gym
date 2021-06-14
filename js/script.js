$('.banner-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: true,
    arrows: false,
   
  
  
});

  $('.venobox').venobox();



$('.sliders').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
    autoplay: true,
    arrows: false,
   
  
  
});


 $('.counter').counterUp({
                delay: 10,
                time: 1000
            });



$('.pic_sliders').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
   
  
  
});


$(document).ready(function(){
        
        $("#colorful").colorfulTab();    
        
      
    
    }); 