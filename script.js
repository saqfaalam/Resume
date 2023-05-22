$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        var target = $($(this).attr('href'));
        var scrollToPosition = target.offset().top;

        $('html, body').animate({
            scrollTop: scrollToPosition
        }, 500, 'linear');
    });
});
