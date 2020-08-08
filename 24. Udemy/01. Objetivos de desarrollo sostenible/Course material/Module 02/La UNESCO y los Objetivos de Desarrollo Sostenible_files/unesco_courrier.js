(function ($) {
	Drupal.behaviors.unesco_courrier = {
	  attach: function (context, settings) {
	    $( document ).ready(function() {
		    $('.language_menu').each(function(){
		        var lang = $('html').attr('lang');
		        
		        var $language_button = $(this).find('.language_button');
		        var $language_dropdown = $(this).find('.language_dropdown');
		        
		        var selected_language_label = $language_dropdown.find('a:lang('+lang+')').text();
		        $language_button.text(selected_language_label);
		    });
		});
	  }
	};
}(jQuery));