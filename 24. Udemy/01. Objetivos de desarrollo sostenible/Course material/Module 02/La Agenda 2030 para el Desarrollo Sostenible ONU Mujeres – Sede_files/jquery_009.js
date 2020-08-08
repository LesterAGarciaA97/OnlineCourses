$(document).ready(function () {
    var sliders = $('.bxslider');
    sliders.bxSlider({
        mode: 'fade',
        auto: true,
        onSliderLoad: function (currentIndex) {
            $(".slide-caption").html($('.bxslider figure').eq(currentIndex).find("figcaption").html());
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            var ctrClass = 'slide-caption';
            if ($('.slider-wrap').length > 1) {
                $slideElement.parents(".slider-wrap").find(".slide-caption").html($slideElement.find("figcaption").html());
            }
            else {
                $(".slide-caption").html($slideElement.find("figcaption").html());
            }
        }
    });
});

$('.slider-wrap').append('<div class="slide-caption"></div>');
