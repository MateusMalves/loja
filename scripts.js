$(document).ready(function() {
    $('.add-to-cart').click(function() {
        $('#cart-message').fadeIn().delay(1000).fadeOut();
    });

    $('.product-item img').hover(
        function() {
            $(this).addClass('zoomed');
        },
        function() {
            $(this).removeClass('zoomed');
        }
    );
});
