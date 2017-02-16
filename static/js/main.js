(function ($) {
    $(function() {
        $('.js-slick').slicknav({
            label: ''
        });
    });

    $(window).on('load scroll resize', positionFooter);

    function positionFooter() {
        var $window = $(window);
        var $body = $('body');
        var $footer = $('.footer');
        var footerHeight = $footer.height();
        var footerTop = $window.scrollTop() + $window.height() - footerHeight;

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
} (jQuery));
