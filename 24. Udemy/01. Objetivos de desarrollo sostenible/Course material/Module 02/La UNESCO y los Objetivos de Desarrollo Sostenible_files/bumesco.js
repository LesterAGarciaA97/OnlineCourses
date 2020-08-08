// Precisa reorganizar esse arquivo todo

(function($){
  Drupal.behaviors.bunesco = {
    attach: function(context, settings) {

      $('.menu .expanded a.dropdown-toggle').click(function(e) {
        $(this).attr('data-target', $(this).attr('href'));
      });
      
      $('#block-menu-menu-social-media .last.expanded.nolink').click(function(){
        $(this).children(".menu").first().slideToggle('slow', function() {});
      });

      $('.carousel-control.left').click(function(e) {
        e.preventDefault();
        $('#myCarousel').carousel('prev');
      });

      $('.carousel-control.right').click(function(e) {
        e.preventDefault();
        $('#myCarousel').carousel('next');
      });

      function slideshowResizer() {
        var slideheight = 0;
        $('.views-slideshow-cycle-main-frame-row').each(function(){
          if ($(this).parents('.view-conference-speakers-slideshow').length > 0) {
            return;
          }
          slideheight = $(this).find('img').innerHeight();
          if(slideheight !== 0){
            $('.views-slideshow-cycle-main-frame').css('height',slideheight+'px');
            return false;
          }
        });
      }

     
      slideshowResizer();

      $(window).resize(function() {
        slideshowResizer();
      });

    }
  };
})(jQuery);