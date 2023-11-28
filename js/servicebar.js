jQuery(document).ready(function(){
/* set up service bar toggle */
  $('.service-toggle .service-link').click(function(e){
    e.preventDefault();
    
    if($('#service-group').css('top') == '-79px') {
      $('#service-group').animate({top: '0'}, 350);
    }
    else {
      $('#service-group').animate({top: '-79px'}, 350);
    }
  });

  $(window).resize(function() {
    if($('#service-group').css('top') != '-79px') {
      $('#service-group').animate({top: '-79px'}, 350);
    }
  });
});