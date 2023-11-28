jQuery(document).ready(function(){
  function clearSelected(selector, groupIndex) {
    groupIndex.find(selector).each(function() {
      $(this).removeClass('selected');
      if (selector == '.plan-select') {
        $(this).text('Select');
      }
    });
  }

  function setSelected(selector, indexed) {
    $(selector).each(function(index){
      if (index == indexed) {
        $(this).addClass('selected');
        if (selector == '.plan-select') {
          $(this).html('<i class="icon-ok"></i> Selected');
        }
      }
    });
  }

  function equalizePlanHeights() {
    var tabs = new Array();
    var details = new Array();
    var tab_max_heights = new Array();
    var details_max_heights = new Array();

    $('.container-plans').each(function(index_containers){
      tabs[index_containers] = new Array();
      tab_max_heights[index_containers] = 0;
      
      // find the talest title
      $(this).find('.title').each(function(index_tabs) {
        tabs[index_containers][index_tabs] = $(this);
        if ($(this).height() > tab_max_heights[index_containers]) {
          tab_max_heights[index_containers] = $(this).height();
        }
      });

      details[index_containers] = new Array();
      details_max_heights[index_containers] = 0;

      // find the talest details
      $(this).find('.details-height').each(function(index_details) {
        details[index_containers][index_details] = $(this);
        if ($(this).height() > details_max_heights[index_containers]) {
          details_max_heights[index_containers] = $(this).height();
        }
      });
    });
    
    // loop through all tabs and make them the height of the talest
    $.each(tabs, function(index_containers){
      $.each(tabs[index_containers], function(index_tabs){
        $(this).height(tab_max_heights[index_containers]);
      });
    });

    // loop through all details and make them the height of the talest
    $.each(details, function(index_containers){
      $.each(details[index_containers], function(index_details){
        $(this).height(details_max_heights[index_containers]);
      });
    });
  }

  equalizePlanHeights();

  // equalize the height of the tabs in case
  // the resize makes a tab title grow or
  // shrink a line
  $(window).resize(function() {
    equalizePlanHeights();
  });

  /* plan select tab color and arrow toggle */
  $('.container-plans .tab').click(function(){
    var groupIndex = $(this).parents('.container-plans');
    var tabindex = $('.container-plans .tab').index(this);

    clearSelected('.tab', groupIndex);
    //clearSelected('.plan-select');
    clearSelected('.container-plan-details', groupIndex);

    $(this).addClass('selected');

    //setSelected('.plan-select', tabindex);
    setSelected('.container-plan-details', tabindex);
  });

  /* plan select tab color and arrow toggle */
   $('.plan-select').click(function(e){
    var groupIndex = $(this).parents('.container-plans');
    var buttonindex = $('.plan-select').index(this);

    e.preventDefault();
    clearSelected('.tab', groupIndex);
    clearSelected('.plan-select', groupIndex);
    clearSelected('.container-plan-details', groupIndex);

    $(this).addClass('selected');
    $(this).html('<i class="icon-ok"></i> Selected');

    setSelected('.container-plans .tab', buttonindex);
    setSelected('.container-plan-details', buttonindex);
  });
});