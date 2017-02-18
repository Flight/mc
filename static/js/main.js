(function ($) {
    $(function() {
        $('.js-slick').slicknav({
            label: ''
        });
    });

    $(window).on('load resize', positionFooter);

    function positionFooter() {
        var $window = $(window);
        var $wrapper = $('.wrapper');
        var $footer = $('.footer');
        var footerHeight = $footer.outerHeight();
        var footerTop = $window.scrollTop() + $window.outerHeight() - footerHeight;

        $footer.css({
            position: 'static'
        });

        if ($wrapper.outerHeight() < $window.outerHeight()) {
            $footer.css({
                position: 'absolute',
                top: footerTop + 'px'
            });
        } else {
        }
    }
} (jQuery));
