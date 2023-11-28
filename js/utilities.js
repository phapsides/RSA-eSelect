// Custom javascript code for rsagroup.ca.

jQuery(document).ready(function(){

  // Toggle mobile menu.
  jQuery("#mobile-menu").click(function(){
    jQuery(".region-header").slideToggle();
    jQuery(this).toggleClass("active");
  });

  /* copy address */
  $('[id^="travel-details:sameaddress"]').change(function(){
    if($(this).is(":checked")) {
      $('.master').each(function(index, value){
        $('[id^="' + this.id + '2').val($(this).val());
      });
    } 
    else {
      $('.clone').each(function(){
        $(this).val('');
      });
    }
  });
  
  
  /*----------------------------

    Slide toggle for Showing Plan Highlights

  ----------------------------*/

	$('.showPlanHighlights').live('click', function(){
		
		var planHighlights = $(this).closest('ul').find('.toggleContent');
		
		if(planHighlights.is(':visible')){
			
			 $(this).html('Show Plan Highlights').parent().find('i.icon-chevron-up').removeClass('icon-chevron-up').addClass('icon-chevron-down').parent().parent().find('.toggleContent').slideUp();
			 
		} else {
			
			$(this).html('Close Plan Highlights').parent().find('i.icon-chevron-down').removeClass('icon-chevron-down').addClass('icon-chevron-up').parent().parent().find('.toggleContent').slideDown();
			
		}

    return false;

	});

  /*----------------------------

    Script for changing medical coverage amount

  ----------------------------*/

  // increase your cover limit
  $('.increaseCoverLimit').live('click', function(){

    $(this).parent().parent().parent().closest('div').find('.coverUpTo').hide();
    $(this).parent().parent().parent().closest('div').find('.increaseCover').show();

    return false;

  });

  // cancel increase your cover limit
  $('.increaseCover_Cancel').live('click', function(){

    $(this).parent().parent().parent().closest('div').find('.increaseCover').hide();
    $(this).parent().parent().parent().closest('div').find('.coverUpTo').show();

    return false;

  });

  // update the cover limit div with the selected amount
  $('.increaseCover_Select').live('click', function(){

    var selectedAmount = '$'+$(this).parent().parent().closest('div').find('select').val();

    $('.increaseCover').hide();
    $('.coverUpTo').show();

    $(this).parent().parent().parent().closest('div').find('.medicalCoverAmount').html(selectedAmount);

    return false;

  });

  // Initiate Uniform
  $('select.uniform_select').uniform();

  // Used for demo_page.html
  $('.uniform_Radio').uniform();
  
});