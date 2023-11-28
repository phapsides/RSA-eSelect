function attachErrors() {
  // remove all error classes on control groups first
  $('.control-group').each(function(index){
    $(this).removeClass('error'); 
  }); 
  
  $('.rf-msg').each(function(index) {
    if($(this).prev('input').attr('type') == 'checkbox'){
      $(this).parents('div.control-group').addClass('error'); 
    }
    else if ($(this).text() !== '') {
      $(this).parents('.control-group').addClass('error');
    }
  });
  
  $('[id^="travel-details:errorbar"]').show();
  
  // scroll smoothly to the error message
  $("html, body").animate({ scrollTop: $('[id^="travel-details:errorbar"]').offset().top }, 500);
}