$(document).ready(function() {

    $('.workGrid img').hover(
        function() { // 
            $(this).addClass('hovered-img');
        },
        function() { // 
            $(this).removeClass('hovered-img');
        }
    );

    $('.loopGrid img').hover(
        function() { // 
            $(this).addClass('hovered-img');
        },
        function() { 
            $(this).removeClass('hovered-img');
        }
    );
});