
import Cart from '../sections/cart';

 

$(window).on('load', () => $('.cart-items-list').mCustomScrollbar({
  scrollbarPosition : "outside"
}));

$('.caret-btn').on('click', (event) => {
  event.preventDefault();
  $('.shopping-cart').fadeToggle('fast');
});

$(document).mouseup((event) => {
    var container = $(".shopping-cart");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(event.target) && container.has(event.target).length === 0) 
    {
        container.hide();
    }
});


$('.del-cart-item-btn').click(function(){
  let id = $(this).data('id');
  Cart.deleteById(id).then(res=>{
    console.log(res)
  })
})