(function($){
  Drupal.behaviors.permanent_delegation = {
    attach: function (context, settings) {
     $('.views-field-field-country-delegate-cv .file-size', context).click(function (event) {
        event.preventDefault();
        $(this).parent().parent().parent().parent().children('.views-field-field-country-delegate-short-bio').slideToggle();
        $(this).toggleClass("open-cv");
      });
    }
  };
  Drupal.behaviors.gen_conf = {
    attach: function (context, settings) {
      $('.ico-gen-conf', context).click(function (event) {
        event.preventDefault();
        $(this).parent().parent().parent().children('.views-field-field-dataset-body').slideToggle();
        $(this).parent().toggleClass("open-box");
        $(this).toggleClass("open-cv");
      });
    }
  };
  Drupal.behaviors.email = {
    attach: function (context, settings) {
      createMail($('.views-field-field-country-delegation-email .field-content'));
      createMail($('.field-name-field-office-website .field-item'));
      createMail($('.views-field-field-national-comission-email .field-content'));
    }
  };

  /**
   * Change view to tabs for Conference
   */
  Drupal.behaviors.conferenceProgramTabs = {
    attach: function (context, settings) {
      $('.node-type-conference .view-conference-schedule').once(function(){
        $(this).find('.view-content table').wrapAll('<div class="tab-content"></div>');
        var tabs = '<ul class="nav nav-tabs">';
        var tabDate, tabDateId;
        var tabClass = 'active';
        $(this).find('table caption .date-display-single').each(function(){
          tabDate = $(this).text();
          tabDateId = makeSafeForCSS(tabDate);
          tabs += '<li role="presentation" class="' + tabClass + '"><a data-toggle="tab" href="#' + tabDateId + '">' + tabDate + '</a></li>';
          $(this).parent().parent().wrap('<div role="tabpanel" class="tab-pane ' + tabClass + '" id="' + tabDateId + '"></div>');
          $(this).parent().hide();
          tabClass = '';
        });
        tabs += '</ul>';
        $(this).find('.view-content').prepend(tabs);
	$(window).trigger('resize');
      });
    }
  };

  /**
   * Change text to icons
   */
  Drupal.behaviors.conferenceSpeakersSlideshow = {
    attach: function (context, settings) {
      $('.view-conference-speakers-slideshow').once(function(){
        $(this).find('.views-slideshow-controls-text-next a').text('›');
        $(this).find('.views-slideshow-controls-text-previous a').text('‹');
      });
    }
  };

})(jQuery);

function createMail(mails) {
  array_mails = mails.text().split(" ");
  array_mails_with_link = [];
  for (index = 0; index < array_mails.length; ++index) {
    array_mails_with_link[index] = "<a href='mailto://"+array_mails[index]+"'>"+array_mails[index]+"</a>";
  }
  array_mails = array_mails_with_link.join(" ");
  mails.html(array_mails);
}

function makeSafeForCSS(name) {
  return name.replace(/[^a-z0-9]/g, function(s) {
    var c = s.charCodeAt(0);
    if (c == 32) return '-';
    if (c >= 65 && c <= 90) return '_' + s.toLowerCase();
    return '__' + ('000' + c.toString(16)).slice(-4);
  });
}


!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

jQuery(document).ready(function ($) {
    $('.fronteh').equalHeights();
});
