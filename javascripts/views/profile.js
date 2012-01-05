// profile -------------------------------------------------------------------

$(function(){
  if ($("body.profile")[0]) {
    app.views.profile.init()
  }
});


// profile object ------------------------------------------------------------

// object
app.views.profile = {};

// init
app.views.profile.init = function(element){
  this.initialize.masonry();
  this.initialize.hovers();
  this.initialize.forms();
  app.dropdown.init();
}

app.views.profile.initialize = {

  forms:function(){
    // edit button
    $(".personal a.edit").on("click", function(e){
      $(this).hide().parent().hide()
        .siblings("form").show();
      e.preventDefault();
    })
    // form submission
    // TODO: when we get in Rails this will need to re-render the .body
    $(".personal form").on("submit", function(e){
      $(this).hide()
        .siblings(".body").show()
        .siblings(".edit").css("visibility", "visible")
      e.preventDefault();
    })
    // cancel button (in form)
    $(".personal a.cancel").on("click", function(e){
      $(this).closest("form").hide()
        .siblings(".body").show()
        .siblings(".edit").css("visibility", "visible")
      e.preventDefault();
    })
    // add another field (in form)
    $(".personal .add").on("click", function(e){
      var $this = $(this)
      var $template = $this.siblings(".template").clone();
      $template.removeClass("template").insertBefore($this)
      e.preventDefault();
    })
  },
  hovers:function(){
    $(".box").hover(
      function(){
        $(this).find(".thumbnail p, a.edit").stop().fadeIn(200);
      },
      function(){
        $(this).find(".thumbnail p, a.edit").stop().fadeOut(50, function(){
          // prevents effects tracking (jquery 1.7)
          $(this).css("opacity", 1);
        })
      }
    );
  },
  masonry:function(){
    $boxes = $(".boxes");
    $boxes.imagesLoaded(function(){
      $boxes.masonry();
    })
  }

}



