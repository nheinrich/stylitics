$(function(){

  // profile -----------------------------------------------------------------

  if ($("body.profile")[0]) {

    // masonry groups
    $boxes = $(".boxes");
    $boxes.imagesLoaded(function(){
      $boxes.masonry();
    })

    // fade in/out masonry brick data
    $(".box").hover(
      function(){
        var $this = $(this)
        var opacity = $this.css("opacity")
        console.log(opacity)
        if (opacity > 0 && opacity != 1 ) $this.css("opacity", 0)
        $(this).find(".thumbnail p, a.edit").stop().fadeIn(200);
      },
      function(){
        $(this).find(".thumbnail p, a.edit").stop().fadeOut(50, function(){
          // prevents effects tracking (jquery 1.7)
          $(this).css("opacity", 1); 
        })
      }
    );

    // "personal" edit interactions (edit, cancel, form submission)
    $(".personal a.edit").on("click", function(e){      
      $(this).hide().parent().hide()
        .siblings("form").show();
      e.preventDefault();
    })
    $(".personal a.cancel").on("click", function(e){      
      $(this).closest("form").hide()
        .siblings(".body").show()
        .siblings(".edit").css("visibility", "visible")
      e.preventDefault();
    })
    $(".personal form").on("submit", function(e){      
      // when we get hooked up to Rails this will need to re-render the .body
      $(this).hide()
        .siblings(".body").show()
        .siblings(".edit").css("visibility", "visible")
      e.preventDefault();
    })
    
    // form: add another field
    $(".personal .add").on("click", function(e){
      var $this = $(this)
      var $template = $this.siblings(".template").clone();
      $template.removeClass("template").insertBefore($this)
      e.preventDefault();
    })

  }

});