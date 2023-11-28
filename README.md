# RSA eSelect Front-End Development Guidlines
RSA eSelect is a transactional web application for clients to pay for their insurance policies. The application is built on JSF and Richfaces 5 which has [Twitter Bootstrap 2.3.2](http://getbootstrap.com/2.3.2/) integration. 

The application has white label capabilites and the header and footer of each version will differ slightly. Each site will have it's own theme. The base theme will need to be setup to use less to allow for quick and easy modification of color palettes.

## Bootstrap Extensions

### Bootstrap Datepicker
[Bootstrap datepicker](http://eternicode.github.io/bootstrap-datepicker/?markup=input&format=&weekStart=&startDate=&endDate=&startView=0&minViewMode=0&todayBtn=false&language=en&orientation=auto&multidate=&multidateSeparator=&keyboardNavigation=on&forceParse=on#sandbox) was choosen since it has embedded / inline capabiltities. We opted not to introduce a new ui layer such as jquery mobile or jquery ui to keep the front-end framework as light as possible. 

Usage of the embedded / inline datepicker requires that we create a hidden field

## Layouts
The intent is to use Bootstraps grid whenever possible to ease the effort involved with ensuring fluid layouts and break points are handled as intended. Through some trial and error it has been discovered that it is best to use nested rows instead of fluid rows.
    

    <div class="row">
      <div class="span6">
        <div class="row">
          <div class="span3"></div>
          <div class="span3"></div>
        </div>
      </div>
      <div class="span6">
        <div class="row">
          <div class="span3"></div>
          <div class="span3"></div>
        </div>
      </div>
    </div>
    
## Forms

### Form Grouping Fieldsets and Form Input Rows
Form groupings should use fieldsets with h2's for grouping headings. Each form row has a larger gutter than the content area in the design. This effect has been accomplished by using an emtpy span on both the left and right of the row. The left gutter is accomplished using an offset and the right gutter is accomplished by only spaning the remaining 10 of 11 columns. Form labels are then encapsulated in a nested row with a span of 3 and inputs are in a span of 9. 

  
    <div class="row">
      <div class="span10 offset1">
        <fieldset>
          <h2>Form Grouping Heading</h2>
          <!-- Start of form input row -->
          <div class="row">   
            <div class="control-group">
              <div class="span3">
                <label class="control-label">Form input label</label>
              </div>
              <div class="span9">
                <input type="text" />
              </div>
            </div>
          </div>
          <!-- End of form input row -->
        </fieldset>
      </div>
    </div>

### Form Input Rows With Help
Rows with help us an additional class `class="row-help"` on the row for the input and includes an achor with a class of `class="help-link"`. Help rows are then followed by a help group row.


    <!-- Start of form input row with help -->
    <div class="row row-help">   
      <div class="control-group">
        <div class="span3">
          <label class="control-label">Form input label</label>
        </div>
        <div class="span9">
          <input type="text" />
          <a href="#" class="help-link">+ Show Help</a>
        </div>
      </div>
    </div>
    <!-- End of form input row with help -->
    <!-- Start of row with supporting help text -->
    <div class="row help-group">
      <div class="span10 offset2">
        <div class="arrow-wrapper">
          <div class="arrow-up"></div>
        </div>
        <div class="help">
          <div class="row">
            <div class="span10 offset1">
                <strong>Help text to support the help link.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of row with supporting help text -->

