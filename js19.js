$(document).ready(function() {
    $('.workGrid img').on('mouseenter', function() {
        $(this).addClass('hovered-img');
    }).on('mouseleave', function() {
        $(this).removeClass('hovered-img');
    });
});

    $('.loopGrid img').hover(
        function() {
            $(this).addClass('hovered-img');
        },
        function() {
            $(this).removeClass('hovered-img');
        }
    ); 

    $('.sojourniGrid img').hover(
        function() {
            $(this).addClass('hovered-img');
        },
        function() {
            $(this).removeClass('hovered-img');
        }
    ); 

    