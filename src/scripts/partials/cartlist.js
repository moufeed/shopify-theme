

$(window).on('load', () => $('.content_cart').mCustomScrollbar());

$('.caret-btn').on('click', (event) => {
  event.preventDefault();
  $('.cart-items').fadeToggle('fast');
});

$(document).mouseup(function(e) 
{
    var container = $(".cart-items");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});