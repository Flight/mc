(function ($) {
    $('.js-slick').slicknav({
        label: ''
    });


} (jQuery));

$(window).on('load scroll resize', positionFooter);

function positionFooter() {
    var $window = $(window),
        $body = $('body'),
        $footer = $('.footer'),
        footerHeight = $footer.height(),
        footerTop = $window.scrollTop() + $window.height() - footerHeight;

    if ($body.height() + footerHeight < $window.height()) {
        $footer.css({
            position: 'absolute',
            top: footerTop + 'px'
        });
    } else {
        $footer.css({
           position: 'static'
        });
    }

}