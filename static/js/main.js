(function ($) {
    $(function() {
        $('.js-slick').slicknav({
            label: ''
        });

        $('select').select2({
            minimumResultsForSearch: Infinity
        });

        $('.js-card-number').mask('9999-9999-9999-9999');
        $('.js-cvv').mask('999');
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

        if ($wrapper.outerHeight() >= $window.outerHeight()) {
            return;
        }

        $footer.css({
            position: 'absolute',
            top: footerTop + 'px'
        });
    }
} (jQuery));
