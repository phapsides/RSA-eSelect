jQuery(document).ready(function(){

    /* set up form help toggle links */
  $(document).on( "click", "a.help-link", function(e) {
    /* iterate through array or object  */
    e.preventDefault();
    
    var helpParent = $(this).parents('.row-help');
    var helpDiv = helpParent.next('.help-group');
 
    helpDiv.toggle();
    if (helpDiv.is(":visible")) {
      $(this).html('<i class="icon-angle-up"></i> <span class="under">Hide Help</span>');
    }
    else {
      $(this).html('<i class="fa icon-angle-down"></i> <span class="under">Show Help</span>');
    }
  });
});