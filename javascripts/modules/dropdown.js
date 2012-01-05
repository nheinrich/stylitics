// dropdown ------------------------------------------------------------------
// handles interaction for dropdown buttons

// initialized via:
// --> app.views.profile.init()

// ---------------------------------------------------------------------------

// common
app.dropdown = {
  $: { el: "" }
}

// init
app.dropdown.init = function(element){
  this.$.el = $(element || ".dropdown")
  this.initialize.button()
}

// individual initializers
app.dropdown.initialize = {
  $: app.dropdown.$,

  button:function(){
    this.$.el.find(".button").on("click", function(e){
      var $this = $(this);
      var $dropdown = $this.parent();
      var $list = $this.siblings("ul");
      
      $dropdown.addClass("active")
      
      $list.slideToggle(200, function(){
        // if list is visible after animation,
        // bind an event handler to the document to close the list if the
        // document is clicked anywhere but the dropdown button
        if ($list.css("display") == "block") {
          $(document).bind("click", function(){
            $(document).unbind("click");
            $list.slideToggle(200, function(){ 
              $dropdown.removeClass("active");
            });            
          })
        } else {
          $dropdown.removeClass("active");
          $(document).unbind("click")
        }
      });
      e.stopPropagation();
    });
  }

}
