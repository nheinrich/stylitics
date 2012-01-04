$(function(){

  // profile -----------------------------------------------------------------

  if ($("body.profile")[0]) {

    // fade in/out masonry brick data

    $(".box").hover(
      function(){
        $(this).find(".thumbnail p, a.edit").stop().fadeIn(300)
      },
      function(){
        $(this).find(".thumbnail p, a.edit").stop().fadeOut(300, function(){
          $(this).css("opacity", 1) // prevents effects tracking (jquery 1.7)
        })
      }
    )

    // masonry groups
    $boxes = $(".boxes");
    $boxes.imagesLoaded(function(){
      $boxes.masonry();
    })
  }

});