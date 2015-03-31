// ------------------------------------------------
// APP.JS
//
// (1)  Top Nav Menu
// (2)  ???
// (3)  Profit...
// ------------------------------------------------




// ------------------------------------------------
// (1)  Top Nav Menu:
// ------------------------------------------------

$(document).ready(function() {

  $('body').addClass('js');
      var $menu = $('#top_menu'),
          $menulink = $('.menu-link'),
          $menuTrigger = $('.has-subnav > a');

    $menulink.click(function(e) {
        e.preventDefault();
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
    });

    $menuTrigger.click(function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('active').next('ul').toggleClass('active');
    });

});


// ------------------------------------------------
// (2)  Sidenav:
// ------------------------------------------------

$("#toggleSidenav").click(function(){
    $("#sb_nav").toggleClass("active");
    // $("#sbp_content").toggleClass("pushed");
});
