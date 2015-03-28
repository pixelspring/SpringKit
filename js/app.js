// ------------------------------------------------
// APP.JS
//
// (1)  Nav Menu
// (2)  ???
// (3)  Profit
// ------------------------------------------------




// ------------------------------------------------
// (1)  Nav Menu:
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