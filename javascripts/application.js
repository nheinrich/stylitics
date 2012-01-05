// app -----------------------------------------------------------------------
// holds all application specific javascript

var app = {};


// app.views -----------------------------------------------------------------
// holds all view specific code for the application, separated by controllers
// and views (if necessary)

app.views = {};


// run on every page ---------------------------------------------------------

$(function(){

  // facebox
  $("a[rel*=facebox]").facebox();  
  $("#facebox").on("click", "a.cancel", function(e){
    $(document).trigger("close.facebox");
    e.preventDefault();
  });

})
