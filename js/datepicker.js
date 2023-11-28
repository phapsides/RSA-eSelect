jQuery(document).ready(function(){
  enableDatePicker();
});

function enableDatePicker() {
  $('.date-picker').datepicker({
    language: $('#lang').val()
  })
  .on('changeDate', function(e) {
    $('[id^="travel-details:' + e.currentTarget.id + '-value"]').val($.format.date(e.date, "MM/dd/yyyy"));
    
    if ($('[id^="travel-details:coverageType2:0"]').is(':checked') == true || $('[id^="travel-details:coverageType:0"]').is(':checked') == true) {    
      
      var dateDepart = new Date($('[id="travel-details:date-depart-value"]').val());
      var dateReturn = new Date($('[id="travel-details:date-return-value"]').val());
      var dateDiff = (Math.round((dateReturn - dateDepart) / 86400000) + 1);

      if (!isNaN(dateDiff)) {
        $('#trip-duration').text(dateDiff);
      }
    }

    if ($('[id^="travel-details:coverageType2:1"]').is(':checked') == true) {
      var dateStart = new Date($('[id="travel-details:date-annual-start-value"]').val().replace(/\//g, ','));
      var dateEnd = $.format.date(new Date(dateStart.setFullYear(dateStart.getFullYear() + 1)), "ddd MMMM yyyy");
    
      $('#trip-coverage-end').text(dateEnd);

    }
  });

  $('.date-picker-hidden').each(function(index) {
    if ($(this).val() !== '') {
      // if there is a date already set in the input
      // then we need to update the datepicker to display
      // the date in the calednar widget
      var idElements = $(this).attr('id').split(":");
      $('#' + idElements[1].replace('-value', '')).datepicker('update', $.format.date(new Date($(this).val()), "MM/dd/yyyy"));
    }
    else {
      var today = new Date();
      var todayFormatted = $.format.date(today, "MM/dd/yyyy");
          
      $(this).val(todayFormatted);
    }
  });
}