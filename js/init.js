(function ($) {
  $(function () {
    $(".sidenav").sidenav();
    $(".parallax").parallax();

    $(".menu-item").on("click", (event) => {
      if ($(".selected-menu-item").length) {
        $($(".selected-menu-item")[0]).removeClass("selected-menu-item");
      }

      $(event.target).addClass("selected-menu-item");
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
